import {BaseRequest} from "@/api/axios";

class UserApi extends BaseRequest {
  ping() {
    return super.request({
      url: '/user/ping',
      method: 'get'
    })
  }
}

export default new UserApi({
  prefixUrl: '/api'
})