<template>
  <div class="check-button" :class="{check:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .check-button img {
        border-radius: 50%;
        border:2px solid #aaa;
    }
    .check img {
        border-color: red;
        background-color: red;
    }
</style>