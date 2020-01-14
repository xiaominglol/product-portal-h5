<template>
    <div id="category">
        <Search/>
        <van-tree-select
                height="100vh"
                :items="items"
                :main-active-index.sync="activeIndex"
                @click-nav="clickNav"
                @click-item="clickItem"
        >
            <!--            <template slot="content">-->
            <!--                <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg"/>-->
            <!--                <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg"/>-->
            <!--            </template>-->
        </van-tree-select>
    </div>
</template>
<script>
    import Search from '../../components/Search.vue'
    import {getGoodsCategory, getGoods} from '../../api/goods'
    import {TreeSelect} from 'vant';

    export default {
        name: "category",
        data() {
            return {
                activeIndex: 0,
                items: []
            }
        },
        created() {
            this.getGoodsCategory()
        },
        methods: {
            getGoodsCategory() {
                getGoodsCategory().then(response => {
                    let result = response.data;
                    const map = new Map();
                    for (let i in result) {
                        if (!result[i].pid) {
                            let main = {
                                text: result[i].name,
                                id: result[i].id,
                                children: []
                            }
                            map.set(result[i].id, main);
                        }
                    }
                    for (let [k, v] of map) {
                        for (let i in result) {
                            if (result[i].pid === k) {
                                let children = {
                                    text: result[i].name,
                                    id: result[i].id
                                }
                                map.get(result[i].pid).children.push(children)
                            }
                        }
                        this.items.push(v);
                    }
                });
            },
            getGoods(categoryId) {
                getGoods(categoryId).then(response => {
                    let result = response.data;
                    this.$router.push({path: '/goods'})
                    console.log("haha", result)
                });
            },
            clickNav() {
                console.log("click-nav");
            },
            clickItem(data) {
                this.getGoods(data.id);
            }

        },
        components: {
            Search,
            [TreeSelect.name]: TreeSelect,
        }
    };
</script>
