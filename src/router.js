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
        path: "/home",
        component: home
    },
    {
        path: "/category",
        component: category
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
    }
]

const router = new VueRouter({
    routes
})

export default router;
