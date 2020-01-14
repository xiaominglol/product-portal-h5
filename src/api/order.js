import request from '../utils/request'

const BASE_URL = '/api/order'

/**
 * 获取订单
 * @param memberId  会员id
 * @returns {AxiosPromise}
 */
export function getOrder(memberId) {
    return request({
        url: `${BASE_URL}`,
        method: 'get',
        params: {'memberId': memberId}
    });
}

/**
 * 提交订单
 * @param order
 * @returns {AxiosPromise}
 */
export function addOrder(order) {
    return request({
        url: `${BASE_URL}`,
        method: 'post',
        data: order
    });
}
