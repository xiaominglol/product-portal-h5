<template>
    <div class="hello">
        <van-tabbar v-model="active" @change="onChange">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">分类</van-tabbar-item>
            <van-tabbar-item icon="setting-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import {Tabbar, TabbarItem} from 'vant';

    export default {
        data() {
            return {
                active: 0
            }
        },
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        },
        methods: {
            onChange(index) {
                // Notify({ type: 'primary', message: index });
                alert(index);
            }
        }
    }
</script>
