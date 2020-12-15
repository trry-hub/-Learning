import axios from 'axios'
import qs from 'qs'

console.log(axios);
const toLogin = () =>{

}

const instance = axios.create({
    baseURL: process.env.NODE_ENV !== 'development' && process.env.REACT_APP_API_URL,
    timeout: 10000,
    responseType: 'json'
})


instance.interceptors.request.use(
    request => {
        if (request.method === 'post' || request.method === 'put' || request.method === 'delete') {
            if (typeof (request.data) !== 'string' && request.headers['Content-Type'] !== 'multipart/form-data') {
                request.data = qs.stringify(request.data)
            }
        }
        return request
    }, error => {
        Promise.reject(error)
    }
)

instance.interceptors.response.use(
    async response => {
        if (response.data.error != '') {
            // 如果接口请求时发现 token 失效，则立马跳转到登录页
            if (response.data.status == 0) {
                toLogin()
            }
            return Promise.reject(response.data)
        }
        return Promise.resolve(response.data)
    },
    error => {
        if (error.response) {
            if (error.response.status === 500) {
                console.log('服务器错误，请联系管理员处理')
            }
            return Promise.reject(error.response.data)
        } else {
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default instance
