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
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
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
    import {Search, Swipe, SwipeItem, Grid, GridItem,Lazyload } from 'vant';

    export default {
        data() {
            return {
              images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg'
              ]
            }
          },
        components: {
            [Search.name]: Search,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,
            [Lazyload.name]: Lazyload
        }
    }
</script>