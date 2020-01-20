<template>
    <div>
        <Search/>
        <van-swipe indicator-color="white">
            <van-swipe-item>
                <van-grid :column-num="3">
                    <van-grid-item
                            v-for="value in 6"
                            :key="value"
                            icon="photo-o"
                            text="文字"
                    />
                </van-grid>
            </van-swipe-item>
            <van-swipe-item>
                <van-grid :column-num="3">
                    <van-grid-item
                            v-for="value in 6"
                            :key="value"
                            icon="photo-o"
                            text="文字"
                    />
                </van-grid>
            </van-swipe-item>
        </van-swipe>
        <div>猜你喜歡</div>
        <van-grid :column-num="3">
            <van-grid-item
                    v-for="value in 6"
                    :key="value"
                    icon="photo-o"
                    text="文字"
            />
        </van-grid>
        <van-row class="col-2">
            <van-col class="row-2" span="6" v-for="(v,index) in badge.icon" :key='v.id'>
                <a href="#">
                    <img :src="badge.icon[index]"/>
                    <span>{{badge.title[index]}}</span>
                </a>
            </van-col>
        </van-row>
        <van-divider>我是有底綫的</van-divider>
    </div>
</template>
<script>
    import {Col, Divider, Grid, GridItem, Lazyload, Row, Swipe, SwipeItem} from 'vant';
    import {getUserList} from '../api/system-user'
    import Search from '../components/Search.vue'

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
                    icon: [require('../assets/images/nav/1.jpg'), require('../assets/images/nav/1.jpg'), require('../assets/images/nav/9.jpg'),
                        require('../assets/images/nav/3.jpg'), require('../assets/images/nav/5.jpg'), require('../assets/images/nav/7.jpg'),
                        require('../assets/images/nav/4.jpg'), require('../assets/images/nav/8.jpg')],
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
                    console.log("res111", res)
                    this.list = res.records;
                    console.log("list", this.list)
                });
            }
        },
        components: {
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,
            [Lazyload.name]: Lazyload,
            [Row.name]: Row,
            [Col.name]: Col,
            [Divider.name]: Divider,
            Search
        }
    }
</script>
<style lang="less">
</style>
