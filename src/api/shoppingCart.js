import request from '../utils/request'

const BASE_URL = '/api/shopping/cart'

/**
 * 通过会员id获取购物车
 * @param memberId 会员id
 * @returns {AxiosPromise}
 */
export function getShoppingCart(memberId) {
    return request({
        url: `${BASE_URL}`,
        method: 'get',
        params: {'memberId': memberId}
    });
}

/**
 * 加入购物车
 * @param order
 * @returns {AxiosPromise}
 */
export function addShoppingCart(shoppingCart) {
    return request({
        url: `${BASE_URL}`,
        method: 'post',
        data: shoppingCart
    });
}

/**
 * 移除购物车
 * @param ids
 * @returns {AxiosPromise}
 */
export function deleteShoppingCart(ids) {
    return request({
        url: `${BASE_URL}`,
        method: 'delete',
        data: {'ids': Array.of(ids)}
    });
}