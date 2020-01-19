<template>
    <div id="goods">
        <Search/>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1"/>
            <van-dropdown-item v-model="value2" :options="option2"/>
            <van-dropdown-item v-model="brandValue" :options="brand"/>
            <van-dropdown-item v-model="priceValue" :options="price"/>
        </van-dropdown-menu>
        <van-card
                price="2.00"
                origin-price="10.00"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                @click="gotoGoodsDetail"
        >
            <div slot="tag">
                <van-tag round type="success">自营</van-tag>
            </div>
            <div slot="tags">
<!--                <van-tag round type="success">新品</van-tag>-->
            </div>
            <div slot="title">
                <div class="van-ellipsis">商品标题</div>
            </div>
            <div slot="bottom">
                <div class="van-ellipsis">1200+销量 800+评价 98%好评</div>
                <div class="van-ellipsis">华为</div>
            </div>
<!--            <div slot="footer">-->
<!--                <van-button size="mini">加入购物车</van-button>-->
<!--                <van-button size="mini">立即购买</van-button>-->
<!--            </div>-->
        </van-card>
        <div class="van-hairline--bottom"></div>
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
        <div>11{{this.$route.params}}</div>
        <div>22{{$route.meta.goods}}</div>
        <div>33{{goods}}</div>
    </div>
</template>

<script>
    import Search from '../../components/Search.vue'
    import {Button, Card, DropdownItem, DropdownMenu, Tag} from 'vant';


    export default {
        name: "goods",
        components: {
            Search,
            [Card.name]: Card,
            [DropdownMenu.name]: DropdownMenu,
            [DropdownItem.name]: DropdownItem,
            [Tag.name]: Tag,
            [Button.name]: Button,
        },

        data() {
            return {
                goods: this.$store.state.goods.goods,
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
                ],
                brandValue: '',
                brand: [
                    {text: '品牌', value: ''},
                    {text: '苹果', value: 'b'},
                    {text: '华为', value: 'c'},
                ],
                priceValue: '',
                price: [
                    {text: '价格', value: ''},
                    {text: '高到低', value: 'b'},
                    {text: '低到高', value: 'c'},
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
<style>
    .van-card{
        background-color:#ffffff
    }
</style>
