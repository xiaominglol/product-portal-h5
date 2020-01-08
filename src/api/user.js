import request from '@/utils/request'
import axios from 'axios'

export function login(data) {
    return axios.post('/oauth/token?grant_type=password&username=' + data.username + '&password=' + data.password, null, {
        auth: {
            "username": "api-boot-admin",
            "password": '123456'
        }
    }).catch(function () {
    });
}

export function getInfo(token) {
    if (token != undefined) {
        return request({
            url: '/system/user',
            method: 'get'
        });
    }
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}
