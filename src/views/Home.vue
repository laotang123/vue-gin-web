<template>
  <div style="margin-left: 10px">
    <h1>hello</h1>
    <el-button type="primary"
               @click="ping">start ping
    </el-button>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <h1>{{ message }}</h1>
  </div>

</template>

<script>
import UserApi from '@/api/user';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      message: "not pong"
    }
  },
  methods: {
    ping() {
      console.log("ping")
      this.message = "pong success"
      UserApi.ping().then(res => {
        console.log("ping res: ", res)
        try {
          if (res.code == 200) {
            this.message = res.data
          } else {
            this.$message.warning(res.message)
          }
        } catch (error) {
          console.log(error)
        }
      })
    }
  }
}
</script>