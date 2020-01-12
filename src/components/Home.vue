<template>
    <div>
        <form action="/">
            <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
            />
        </form>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image"/>
            </van-swipe-item>
        </van-swipe>
        <van-grid :column-num="3">
            <van-grid-item
                    v-for="value in 6"
                    :key="value"
                    icon="photo-o"
                    text="文字"
            />
        </van-grid>
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-image src="src/assets/images/nav/1.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
        </van-grid>
        <van-row class="col-2">
            <van-col class="row-2" span="6" v-for="(v,index) in badge.icon" :key='v.id'>
                <a href="#">
                    <img :src="badge.icon[index]"/>
                    <span>{{badge.title[index]}}</span>
                </a>
            </van-col>
        </van-row>
    </div>
</template>
<script>
    import {Grid, GridItem, Lazyload, Search, Swipe, SwipeItem, Row, Col} from 'vant';
    import {getUserList} from '../api/system-user'

    export default {
        data() {
            return {
                list: null,
                total: 0,
                listLoading: false,
                images: [
                    require('../assets/banner.jpg'),
                    'http://localhost:8001/assets/banner.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                badge: {
                    icon: [require('../assets/logo.png'), require('../assets/bargain.png'), require('../assets/logo.png'),
                        require('../assets/logo.png'), require('../assets/logo.png'), require('../assets/logo.png'),
                        require('../assets/logo.png'), require('../assets/logo.png')],
                    title: ['鞋包馆', '运动馆', '母婴馆', '超市', '女装馆', '美妆馆', '男装馆', '更多'],
                },
                // 查询条件
                listQuery: {
                    // 页码
                    page: 1,
                    // 每页条数
                    limit: 20,
                    // 用户名
                    username: undefined,
                    // 状态
                    status: undefined
                }
            }
        },
        created() {
            // 页面初始化后执行查询第一页用户
            this.getList()
        },
        methods: {
            getList() {
                this.listLoading = true
                getUserList(this.listQuery).then(response => {
                    let res = response.data;
                    this.list = res.data;
                    this.total = res.totalElements;
                    this.listLoading = false
                });
            }
        },
        components: {
            [Search.name]: Search,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,
            [Lazyload.name]: Lazyload,
            [Row.name]: Row,
            [Col.name]: Col
        }
    }
</script>
<style lang="less">
</style>
