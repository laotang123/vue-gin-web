<template>
  <div class="header-container">
    <div class="l-content">
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini">
      </el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu")
    }
  },
  data() {
    return {
      // 定义首页导航数据
      tags: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 'home'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.header-container {
  background-color: #333;
  height: 60px;
  display: flex;
  /*height: 100%;*/
  justify-content: space-between;
  align-items: center;
}

.l-content {
  display: flex;
  align-items: center;

  .el-button {
    margin-right: 20px;
  }
}


.r-content {

  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}


</style>

