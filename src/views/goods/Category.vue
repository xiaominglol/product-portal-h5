<template>
    <div id="category">
        <Search/>
        <van-tree-select
                height="100vh"
                :items="mainCategory"
                :main-active-index.sync="mainIndex"
                @click-nav="clickNav"
        >
            <template slot="content">
                <van-tabs v-model="secondIndex" swipeable @click="onClick">
                    <van-tab v-for="(value,index) in secondCategory" :key="index" :title="value.name">
                        <van-grid :column-num="3" v-bind:border=border icon-size="56px">
                            <van-grid-item
                                    v-for="(value,index) in thirdCategory"
                                    :key="index"
                                    icon="https://img.yzcdn.cn/vant/apple-1.jpg"
                                    :text="value.name"
                                    @click="getGoods(value.id)"
                            />
                        </van-grid>
                    </van-tab>
                </van-tabs>
            </template>
        </van-tree-select>
    </div>
</template>
<script>
    import Search from '../../components/Search.vue'
    import {getGoods, getGoodsCategory} from '../../api/goods'
    import {Grid, GridItem, Image, Tab, Tabs, TreeSelect} from 'vant';

    export default {
        name: "category",
        data() {
            return {
                mainIndex: 0,//一级分类下标
                mainCategory: [],//一级分类
                secondIndex: 0,//二级分类下标
                secondId: "",//初始化二级分类id，得到对应的三级分类
                secondCategory: [],//二级分类
                thirdCategory: [],//三级分类
                mainIndexMap: new Map(),//key=mainIndex,value=一级分类
                mainMap: new Map(),//key=一级分类id，value=
                secondMap: new Map(),//key=一级分类id，value=二级分类
                secondIdNameMap: new Map(),//key=二级分类Id,value=二级分类name
                secondNameMap: new Map(),//key=二级分类名称,value=三级分类
                thirdMap: new Map(),//key=二级分类id，value=三级分类
                goods: [],//分类对应的商品
                border: false//是否显示边框
            }
        },
        created() {
            this.getGoodsCategory()
        },
        methods: {
            getGoodsCategory() {
                getGoodsCategory().then(response => {
                    let result = response.data;
                    let j = 0;
                    for (let i in result) {
                        if (!result[i].pid) {
                            let main = {
                                id: result[i].id,
                                text: result[i].name
                            }
                            this.mainIndexMap.set(j, result[i]);
                            j++
                            this.mainCategory.push(main);
                            this.mainMap.set(result[i].id, main);
                        } else {
                            if (this.mainMap.get(result[i].pid)) {
                                if (this.mainIndexMap.get(0).id === result[i].pid) {
                                    this.secondCategory.push(result[i])
                                    if (!this.secondId) {
                                        this.secondId = result[i].id
                                    }
                                }
                                if (this.secondMap.get(result[i].pid)) {
                                    let subs = this.secondMap.get(result[i].pid)
                                    subs.push(result[i])
                                    this.secondMap.set(result[i].pid, subs)
                                } else {
                                    let subs = [];
                                    subs.push(result[i])
                                    this.secondMap.set(result[i].pid, subs)
                                }
                                this.secondIdNameMap.set(result[i].id, result[i].name)
                            } else {
                                let secondName = this.secondIdNameMap.get(result[i].pid)
                                if (this.thirdMap.get(result[i].pid)) {
                                    let subs = this.thirdMap.get(result[i].pid)
                                    subs.push(result[i])
                                    this.thirdMap.set(result[i].pid, subs)
                                    this.secondNameMap.set(secondName, subs)
                                } else {
                                    let subs = [];
                                    subs.push(result[i])
                                    this.thirdMap.set(result[i].pid, subs)
                                    this.secondNameMap.set(secondName, subs)
                                }
                            }
                        }
                    }
                    let id = this.secondId
                    let third = this.thirdMap.get(id)
                    this.thirdCategory = third
                    // console.log("mainIndexMap",this.mainIndexMap)
                    // console.log("mainMap",this.mainMap)
                    // console.log("secondMap",this.secondMap)
                    // console.log("thirdMap", this.thirdMap)
                    // console.log("thirdCategory", this.thirdCategory)

                });
            },
            getGoods(categoryId) {
                getGoods(categoryId).then(response => {
                    let result = response.data;
                    this.$router.push({name: 'goods', params: {goods: result}})
                });
            },
            clickNav(index) {
                this.mainIndex = index
                let mainCategory = this.mainIndexMap.get(index)
                let result = this.secondMap.get(mainCategory.id)
                this.secondCategory = result
                if (result) {
                    this.onClick(0, result[0].name)
                }
            },
            onClick(name, title) {
                this.secondIndex = name
                let result = this.secondNameMap.get(title)
                this.thirdCategory = result
            }

        },
        components: {
            Search,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [TreeSelect.name]: TreeSelect,
            [Image.name]: Image,
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,
        }
    };
</script>
<style>
    /*.van-tree-select__nav {*/
    /*    flex: 0.7;*/
    /*}*/

    /*.van-tree-select__content {*/
    /*    flex: 2.5;*/
    /*}*/
    .van-tabs__wrap--scrollable .van-tab {
        flex-basis: 35% !important;
    }
</style>