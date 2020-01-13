<template>
    <div id="category">
        <Search/>
        <van-tree-select
                height="100vh"
                :items="items"
                :main-active-index.sync="activeIndex"
                @click-nav="clickNav"
                @click-item1="clickItem"
        >
            <!--            <template slot="content">-->
            <!--                <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg"/>-->
            <!--                <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg"/>-->
            <!--            </template>-->
        </van-tree-select>
    </div>
</template>
<script>
    import Search from '../components/Search.vue'
    import {getGoodsCategory} from '../api/goods'
    import {TreeSelect} from 'vant';

    export default {
        name: "category",
        data() {
            return {
                activeIndex: 0,
                items: [
                    {
                        // 导航名称
                        text: '所有城市',
                        // 导航名称右上角徽标
                        info: 3,
                        // 是否在导航名称右上角显示小红点
                        dot: true,
                        // 导航节点额外类名
                        // className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    }, {
                        // 导航名称
                        text: '所有城市',
                        // 导航名称右上角徽标
                        info: 3,
                        // 是否在导航名称右上角显示小红点
                        dot: true,
                        // 导航节点额外类名
                        // className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州',
                                // id，作为匹配选中状态的标识符
                                id: 1
                            },
                            {
                                text: '杭州',
                                id: 2
                            }
                        ]
                    }, {
                        // 导航名称
                        text: '所有城市',
                        // 导航名称右上角徽标
                        info: 3,
                        // 是否在导航名称右上角显示小红点
                        dot: true,
                        // 导航节点额外类名
                        // className: 'my-class',
                        // 该导航下所有的可选项
                        children: [
                            {
                                // 名称
                                text: '温州22',
                                // id，作为匹配选中状态的标识符
                                id: 1
                            },
                            {
                                text: '杭州11',
                                id: 2
                            }
                        ]
                    }
                ]
            }
        },
        created() {
            // 页面初始化后执行查询第一页用户
            this.getGoodsCategory()
        },
        methods: {
            getGoodsCategory() {
                getGoodsCategory().then(response => {
                    let res = response.data;
                    console.log("res111", res)
                    // this.items = res.data;
                    console.log("items", this.items)
                });
            },
            clickNav() {
                alert("click-nav");
            },
            clickItem() {
                alert("clickItem");
            }

        },
        components: {
            Search,
            [TreeSelect.name]: TreeSelect,
        }
    };
</script>
