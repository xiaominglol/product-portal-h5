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
        <van-row>
            <van-col span="8">
                <van-sidebar v-model="activeKey" @change="onChange">
                    <van-sidebar-item title="标签名1"/>
                    <van-sidebar-item title="标签名2"/>
                    <van-sidebar-item title="标签名3"/>
                </van-sidebar>
            </van-col>
            <van-col span="16">
            <van-grid clickable :column-num="2">
              <van-grid-item icon="home-o" text="路由跳转" replace to="/goods/goodsDetail" />
              <van-grid-item icon="search" text="URL 跳转" url="/vant/mobile.html" />
            </van-grid>
            </van-col>
        </van-row>
    </div>
</template>
<script>
    import {Row, Col, Grid, GridItem, Notify, Search, Sidebar, SidebarItem} from 'vant';

    export default {
        data() {
            return {
                activeKey: 0
            };
        },
        methods: {
            onChange(index) {
                Notify({type: 'primary', message: index});
            }
        },
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Search.name]: Search,
            [Sidebar.name]: Sidebar,
            [SidebarItem.name]: SidebarItem,
            [Grid.name]: Grid,
            [GridItem.name]: GridItem
        }
    }
</script>