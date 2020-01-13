import axios from 'axios'
import {getToken} from '../utils/auth'

const service = axios.create({
    timeout: 5000
})


service.interceptors.request.use(
    config => {
        // 设置主体格式
        config.headers['Content-Type'] = "application/json";
        // 设置请求token
        let token = getToken();
        config.headers['Authorization'] = 'Bearer ' + token;
        //config.url = 'http://localhost:40020' + config.url;
        return config
    }, error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    response => {
        console.log("response", response)
        const res = response.data
        console.log("res", res)
        if (res.success) {
            return res
        } else {
            return Promise.reject(new Error(res.message || 'Error'))
        }
    }, error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service
