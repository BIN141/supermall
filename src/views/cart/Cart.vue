<template>
    <div class="cart">
        <!-- 顶部导航 -->
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <!-- 商品列表 -->
        <cart-list></cart-list>
        <!-- 底部导航 -->
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComponents/CartList"
import CartBottomBar from "./childComponents/CartBottomBar"

import {mapGetters} from 'vuex'

export default {
    components: {
        NavBar,
        CartList,
        CartBottomBar
    },
    computed: {
        ...mapGetters(['cartLength'])
    }
}
</script>

<style scoped>
    .cart {
        height: 100vh;
    }
    .nav-bar {
        background-color:var(--color-tint);
        color: #fff;
        
    }
</style>