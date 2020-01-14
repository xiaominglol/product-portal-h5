<template>
    <div id="goods">
        <Search/>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1"/>
            <van-dropdown-item v-model="value2" :options="option2"/>
        </van-dropdown-menu>
        <van-card
                price="2.00"
                origin-price="10.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                @click="gotoGoodsDetail"
        >
            <div slot="tags">
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
            </div>
            <div slot="footer">
                <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button>
            </div>
        </van-card>
    </div>
</template>

<script>
    import Search from '../../components/Search.vue'
    import {Card, DropdownItem, DropdownMenu} from 'vant';


    export default {
        name: "goods",
        components: {
            [Card.name]: Card,
            [DropdownMenu.name]: DropdownMenu,
            [DropdownItem.name]: DropdownItem,
            Search
        },

        data() {
            return {
                value1: 0,
                value2: 'a',
                option1: [
                    {text: '全部商品', value: 0},
                    {text: '新款商品', value: 1},
                    {text: '活动商品', value: 2}
                ],
                option2: [
                    {text: '默认排序', value: 'a'},
                    {text: '好评排序', value: 'b'},
                    {text: '销量排序', value: 'c'},
                ]
            }
        },

        methods: {
            gotoGoodsDetail() {
                this.$router.push({path: '/goods/goodsDetail'})
            }
        }
    };
</script>
