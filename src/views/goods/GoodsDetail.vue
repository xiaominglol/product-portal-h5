<template>
    <div class="goods">

        <van-nav-bar
                left-arrow
                fixed
                @click-left="onClickLeft"
                @click-right="onClickRight"
        >
            <van-tabs slot="title" v-model="active" sticky color="#1989fa" @change="change">
                <van-tab title="商品"/>
                <van-tab title="详情"/>
                <van-tab title="评价"/>
                <van-tab title="问答"/>
            </van-tabs>
            <van-icon name="more-o" slot="right"/>
        </van-nav-bar>

        <van-row v-show="active == 0" style="margin-top: 46px">
            <van-swipe class="goods-swipe" :autoplay="3000" style="margin-top: inherit">
                <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                    <img :src="thumb">
                </van-swipe-item>
            </van-swipe>

            <van-cell-group>
                <van-cell>
                    <div class="goods-title">{{ goods.title }}</div>
                    <div class="goods-price">{{ formatPrice(goods.price) }}</div>
                </van-cell>
                <!--                <van-cell class="goods-express">-->
                <!--                    <van-col span="10">运费：{{ goods.express }}</van-col>-->
                <!--                    <van-col span="14">剩余：{{ goods.remain }}</van-col>-->
                <!--                </van-cell>-->
            </van-cell-group>


            <van-cell-group class="goods-cell-group">
                <van-cell is-link @click="sorry">
                    <template slot="title">
                        <span class="custom-title">优惠劵</span>
                        <van-tag round type="success">满100-10</van-tag>
                        <van-tag round type="success">满200-20</van-tag>
                    </template>
                </van-cell>
            </van-cell-group>


            <van-cell-group class="goods-cell-group">
                <van-cell title="已选" is-link @click="sorry"/>
            </van-cell-group>
        </van-row>

        <van-row v-show="active == 1" style="margin-top: 46px">
            <img src="http://kaifa.crmeb.net/uploads/attach/2019/12/28/fb38198c8b8883f79008a80a5c93f532.jpg"
                 style="max-width: 100%;margin-top: inherit">
        </van-row>


        <van-row v-show="active == 2" style="margin-top: 46px">
            <div style="margin-top: inherit">
                <van-tag round type="warning" style="margin-left: 5px;margin-right: 10px;">全部（490）</van-tag>
                <van-tag round type="warning" style="margin-right: 10px;">有图（6）</van-tag>
                <van-tag round type="warning" style="margin-right: 10px;">好评（360）</van-tag>
                <van-tag round type="warning" style="margin-right: 10px;">追评（6）</van-tag>
                <van-tag round type="warning" style="margin-right: 10px;">中评（6）</van-tag>
                <van-tag round type="warning" style="margin-right: 10px;">差评（6）</van-tag>
            </div>

            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>
        </van-row>


        <van-row v-show="active == 3">
            问答
        </van-row>

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" @click="sorry">
                客服
            </van-goods-action-icon>
            <van-goods-action-icon icon="cart-o" @click="onClickCart">
                购物车
            </van-goods-action-icon>
            <van-goods-action-button type="warning" @click="sorry">
                加入购物车
            </van-goods-action-button>
            <van-goods-action-button type="danger" @click="sorry">
                立即购买
            </van-goods-action-button>
        </van-goods-action>
    </div>
</template>

<script>
    import {
        Cell,
        CellGroup,
        Col,
        GoodsAction,
        GoodsActionButton,
        GoodsActionIcon,
        Icon,
        NavBar,
        Swipe,
        SwipeItem,
        Tab,
        Tabs,
        Tag,
        DropdownMenu, DropdownItem,
        Toast
    } from 'vant';


    export default {
        components: {
            [Tag.name]: Tag,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [GoodsAction.name]: GoodsAction,
            [GoodsActionIcon.name]: GoodsActionIcon,
            [GoodsActionButton.name]: GoodsActionButton,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [NavBar.name]: NavBar,
            [DropdownMenu.name]: DropdownMenu,
            [DropdownItem.name]: DropdownItem,
        },

        data() {
            return {
                active: 0,
                goods: {
                    title: '美国伽力果（约680g/3个）',
                    price: 2680,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                        'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                    ]
                },
                value1: 0,
                value2: 'a',
                option1: [
                    { text: '全部商品', value: 0 },
                    { text: '新款商品', value: 1 },
                    { text: '活动商品', value: 2 }
                ],
                option2: [
                    { text: '默认排序', value: 'a' },
                    { text: '时间最新', value: 'b' },
                    { text: '回复最多', value: 'c' },
                ]
            };
        },

        methods: {
            formatPrice() {
                return '¥' + (this.goods.price / 100).toFixed(2);
            },

            onClickCart() {
                this.$router.push('cart');
            },

            sorry() {
                Toast('暂无后续逻辑~');
            },
            onClickLeft() {
                Toast('返回');
            },
            onClickRight() {
                Toast('按钮');
            },
            change(name) {
                this.active = name
            }
        }
    };
</script>

<style lang="less">
    .goods {
        padding-bottom: 50px;

        &-swipe {
            img {
                width: 100%;
                display: block;
            }
        }

        &-title {
            font-size: 16px;
        }

        &-price {
            color: #f44;
        }

        &-express {
            color: #999;
            font-size: 12px;
            padding: 5px 15px;
        }

        &-cell-group {
            margin: 15px 0;

            .van-cell__value {
                color: #999;
            }
        }

        &-tag {
            margin-left: 5px;
        }
    }
</style>
