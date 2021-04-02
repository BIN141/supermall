<template>
  <div class="cart-list">
      <scroll class="content" ref="Scroll">
          <cart-list-item v-for="item in cartList" :key="item.iid" :product="item"></cart-list-item>
      </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem"

export default {
    components: {
        Scroll,
        CartListItem
    },
    computed: {
        ...mapGetters(['cartList'])
    },
    activated () {
        this.$refs.Scroll.refresh()
    }
}
</script>

<style scoped>
    .cart-list {
        height: calc(100% - 44px - 49px - 40px);
    }
    .content {
        height: 100%;
        overflow: hidden;
    }
</style>