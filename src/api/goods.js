import request from '../utils/request'

const BASE_URL = '/api/goods'

/**
 * 获取商品分类
 * @returns {AxiosPromise}
 */
export const getGoodsCategory = () => request(`${BASE_URL}/category`)

/**
 * 通过分类id获取商品
 * @param categoryId 分类id
 * @returns {AxiosPromise}
 */
export function getGoods(categoryId) {
    return request({
        url: `${BASE_URL}`,
        method: 'get',
        params: {'categoryId': categoryId}
    });
}

/**
 * 商品详细
 * @param goodsId
 * @returns {AxiosPromise}
 */
export const getGoodsDetail = (goodsId) => request(`${BASE_URL}/${goodsId}`)

/**
 * 通过商品id获取商品库存
 * @param goodsId   商品id
 * @returns {AxiosPromise}
 */
export function getGoodsStock(goodsId) {
    return request({
        url: `${BASE_URL}/stock`,
        method: 'get',
        params: {'goodsId': goodsId}
    });
}
