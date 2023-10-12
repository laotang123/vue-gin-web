import axios from 'axios'
import {Message} from "element-ui";

const service = axios.create({
        timeout: 60000,
        withCredentials: true //跨域请求中不携带凭证
    }
)

//请求前拦截
service.interceptors.request.use((param => {
    //设置token
    console.log("请求前拦截")
    param.headers['token'] = window.localStorage.getItem('token')
    return param;
}), error => {
    return Promise.reject(error) //异常向上抛
})

//响应拦截
service.interceptors.response.use((response) => {
    console.log("响应拦截：" + JSON.stringify(response))
    console.log("响应拦截：" + JSON.stringify(response.data))
    if (response.data['code'] == 1001) {
        Message({message: 'token已失效', type: 'error'})
    } else if (response.data['code'] !== 200) {
        Message({message: response.data?.message || '操作失败', type: 'error'})
    } else {
        console.log("请求成功：" + JSON.stringify(response.data))
        return response.data;
    }

}, error => {
    console.log("返回异常" + error)
    Message({message: error.response.data.message || '服务器加载数据异常，请稍后重试！', type: 'error'})
})

class BaseRequest {
    constructor(options) {
        this.prefixUrl = options.prefixUrl
    }

    request(param) {
        param.url = this.prefixUrl + param.url;
        const res = service(param)
        console.log("axios request: " + res)
        return res;
    }
}

export {service, BaseRequest}
