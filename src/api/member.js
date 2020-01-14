import request from '../utils/request'

const BASE_URL = '/api/member'

/**
 * 会员登陆
 * @param member
 * @returns {AxiosPromise}
 */
export function login(member) {
    return request({
        url: '/api/login',
        method: 'post',
        data: member
    });
}

/**
 * 会员注册
 * @param member
 * @returns {AxiosPromise}
 */
export function register(member) {
    return request({
        url: `${BASE_URL}`,
        method: 'post',
        data: member
    });
}

/**
 * 更新会员/身份认证
 * @param member
 * @returns {AxiosPromise}
 */
export function updateMember(member) {
    return request({
        url: `${BASE_URL}`,
        method: 'put',
        data: member
    });
}

/**
 * 获取会员地址
 * @param memberId  会员id
 * @returns {AxiosPromise}
 */
export function getMemberAddress(memberId) {
    return request({
        url: `${BASE_URL}/address`,
        method: 'get',
        params: {'memberId': memberId}
    });
}

/**
 * 新增会员地址
 * @param memberAddress
 * @returns {AxiosPromise}
 */
export function addMemberAddress(memberAddress) {
    return request({
        url: `${BASE_URL}/address`,
        method: 'post',
        data: memberAddress
    });
}

/**
 * 更新会员地址
 * @param memberAddress
 * @returns {AxiosPromise}
 */
export function updateMemberAddress(memberAddress) {
    return request({
        url: `${BASE_URL}/address`,
        method: 'put',
        data: memberAddress
    });
}

/**
 * 删除会员地址
 * @param id
 * @returns {AxiosPromise}
 */
export function deleteMemberAddress(id) {
    return request({
        url: `${BASE_URL}/address/${id}`,
        method: 'delete'
    })
}

/**
 * 获取会员积分
 * @param memberId  会员id
 * @returns {AxiosPromise}
 */
export function getMemberIntegral(memberId) {
    return request({
        url: `${BASE_URL}/integral`,
        method: 'get',
        params: {'memberId': memberId}
    });
}

/**
 * 获取会员收藏
 * @param memberId  会员id
 * @returns {AxiosPromise}
 */
export function getMemberCollection(memberId) {
    return request({
        url: `${BASE_URL}/collection`,
        method: 'get',
        params: {'memberId': memberId}
    });
}

/**
 * 新增会员收藏
 * @param memberCollection
 * @returns {AxiosPromise}
 */
export function addMemberCollection(memberCollection) {
    return request({
        url: `${BASE_URL}/collection`,
        method: 'post',
        data: memberCollection
    });
}

/**
 * 删除会员收藏
 * @param id
 * @returns {AxiosPromise}
 */
export function deleteMemberCollection(id) {
    return request({
        url: `${BASE_URL}/collection/${id}`,
        method: 'delete'
    })
}

/**
 * 获取会员优惠劵
 * @param memberId  会员id
 * @returns {AxiosPromise}
 */
export function getMemberCoupon(memberId) {
    return request({
        url: `${BASE_URL}/coupon`,
        method: 'get',
        params: {'memberId': memberId}
    });
}

/**
 * 新增会员优惠劵
 * @param coupon
 * @returns {AxiosPromise}
 */
export function addMemberCoupon(coupon) {
    return request({
        url: `${BASE_URL}/coupon`,
        method: 'post',
        data: coupon
    });
}

/**
 * 更新会员优惠劵
 * @param coupon
 * @returns {AxiosPromise}
 */
export function updateMemberCoupon(coupon) {
    return request({
        url: `${BASE_URL}/coupon`,
        method: 'put',
        data: coupon
    });
}