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
                <van-swipe-item v-for="thumb in items.thumb" :key="thumb">
                    <img :src="thumb">
                </van-swipe-item>
            </van-swipe>

            <van-cell-group>
                <van-cell>
                    <div class="goods-title">{{ items.title }}</div>
                    <div class="goods-price">{{ formatPrice(items.price) }}</div>
                </van-cell>
                <!--                <van-cell class="goods-express">-->
                <!--                    <van-col span="10">运费：{{ items.express }}</van-col>-->
                <!--                    <van-col span="14">剩余：{{ items.remain }}</van-col>-->
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
                <van-cell title="已选" is-link @click="showSku"/>
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
                <van-dropdown-item v-model="value1" :options="option1"/>
                <van-dropdown-item v-model="value2" :options="option2"/>
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

        <van-sku
                v-model="show"
                :sku="sku"
                :properties="properties"
                :goods="goods"
                :goods-id="goodsId"
                hide-quota-text
                close-on-click-overlay
                @buy-clicked="onBuyClicked"
                @add-cart="onAddCartClicked"
        />
    </div>
</template>

<script>
    import {
        Cell,
        CellGroup,
        Col,
        DropdownItem,
        DropdownMenu,
        GoodsAction,
        GoodsActionButton,
        GoodsActionIcon,
        Icon,
        NavBar,
        Row,
        Sku,
        Swipe,
        SwipeItem,
        Tab,
        Tabs,
        Tag,
        Toast
    } from 'vant';


    export default {

        data() {
            return {
                active: 0,
                items: {
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
                    {text: '全部商品', value: 0},
                    {text: '新款商品', value: 1},
                    {text: '活动商品', value: 2}
                ],
                option2: [
                    {text: '默认排序', value: 'a'},
                    {text: '时间最新', value: 'b'},
                    {text: '回复最多', value: 'c'},
                ],
                // sku参数开始
                show: false,
                goodsId: 0,
                sku: {
                    tree: [
                        {
                            k: '颜色', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '30349', // skuValueId：规格值 id
                                    name: '红色', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                                },
                                {
                                    id: '1215',
                                    name: '蓝色',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                                }
                            ],
                            k_s: 's11' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        },
                        {
                            k: '规格', // skuKeyName：规格类目名称
                            v: [
                                {
                                    id: '1', // skuValueId：规格值 id
                                    name: '红色', // skuValueName：规格值名称
                                    imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                    previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                                },
                                {
                                    id: '2',
                                    name: '蓝色',
                                    imgUrl: 'https://img.yzcdn.cn/2.jpg',
                                    previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                                }
                            ],
                            k_s: 's2' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        }
                    ],
                    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                    list: [
                        {
                            id: 2259, // skuId，下单时后端需要
                            price: 120, // 价格（单位分）
                            s11: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                            s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
                            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                            stock_num: 40 // 当前 sku 组合对应的库存
                        }
                    ],
                    price: '1.00', // 默认价格（单位元）
                    stock_num: 227, // 商品总库存
                    collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                    none_sku: false, // 是否无规格商品
                    messages: [
                        {
                            // 商品留言
                            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                            multiple: '1', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                            name: '留言', // 留言名称
                            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                            // required: '1', // 是否必填 '1' 表示必填
                            placeholder: '可填留言' // 可选值，占位文本
                        }
                    ],
                },
                properties: [ // 商品属性
                    {
                        k_id: 123, // 属性id
                        k: '加料', // 属性名
                        is_multiple: true, // 是否可多选
                        v: [
                            {
                                id: 1222, // 属性值id
                                name: '珍珠', // 属性值名
                                price: 1, // 属性值加价
                            },
                            {
                                id: 1223,
                                name: '椰果',
                                price: 1,
                            }
                        ],
                    }
                ],
                goods: {
                    // 商品标题
                    title: '测试商品',
                    // 默认商品 sku 缩略图
                    picture: 'https://img.yzcdn.cn/1.jpg'
                }
                // sku参数结束
            };
        },

        methods: {
            formatPrice() {
                return '¥' + (this.items.price / 100).toFixed(2);
            },

            onClickCart() {
                this.$router.push('cart');
            },
            showSku() {
                this.show = true
            },
            onBuyClicked() {

            },
            onAddCartClicked() {

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
        },

        components: {
            [Tag.name]: Tag,
            [Col.name]: Col,
            [Row.name]: Row,
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
            [Sku.name]: Sku,
            [DropdownMenu.name]: DropdownMenu,
            [DropdownItem.name]: DropdownItem,
        },
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
