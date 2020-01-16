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
        config.headers['Authorization'] = 'ARabbit ' + token;
        return config
    }, error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.success) {
            return res
        } else {
            return Promise.reject(new Error(res.message || 'Error'))
        }
    }, error => {
        return Promise.reject(error)
    }
)

export default service
