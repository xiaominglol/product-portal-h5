import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./components/Home.vue";
import category from "./components/Category.vue";
import shoppingCart from "./components/ShoppingCart.vue";
import my from "./components/My.vue";
import addressList from "./components/AddressList.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: "/home",
        component: home
    },
    {
        path: "/category",
        component: category,
        meta: {
            title: '购物车'
        }
    },
    {
        path: "/shoppingCart",
        component: shoppingCart
    },
    {
        path: "/my",
        component: my
    },
    {
        path: "/addressList",
        component: addressList
    },
    {
        path: "/goods/goodsDetail",
        component: () => import('./views/goods/goodsDetail'),
        meta: {
            title: '商品详情'
        }
    }

]

const router = new VueRouter({
    routes
})

export default router;
