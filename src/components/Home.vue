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
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <van-grid :column-num="3">
            <van-grid-item
                    v-for="value in 6"
                    :key="value"
                    icon="photo-o"
                    text="文字"
            />
        </van-grid>
    </div>
</template>
<script>
    import {Search, Swipe, SwipeItem, Grid, GridItem} from 'vant';

    export default {
        data() {
            return {
                msg: "首页"
            }
        },
        components: {
            [Search.name]: Search,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [Grid.name]: Grid,
            [GridItem.name]: GridItem
        }
    }
</script>