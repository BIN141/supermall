<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button class="check-button" :isChecked="isSelectAll" @click.native="checkClick"></check-button>
          <span>全选</span>
      </div>
      <div class="price">
          合计:{{totalPrice}} 
      </div>
      <div class="buy" @click="pay">
          去结算({{checkLength}})
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'  
import {mapGetters} from 'vuex'

export default {
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters(['cartList']),
        totalPrice(){
            return '￥'+this.cartList.filter(item=>item.checked)
            .reduce((preValue,item)=>{return item.price*item.count+preValue},0)
        },
        checkLength(){
            return this.cartList.filter(item=>item.checked).length
        },
        isSelectAll(){
            if(this.cartList.length===0)return false
            return !this.cartList.find(item=>!item.checked)
        }
    },
    methods: {
        checkClick(){
            if(this.cartList.length===0)return
            if(this.isSelectAll){
                this.cartList.forEach(item=>item.checked=false)
            }else{
                this.cartList.forEach(item=>item.checked=true)
            }

        },
        pay(){
            if(!this.isSelectAll){
                this.$toast.show('请选择购买的商品')
            }
        }
    }
}
</script>

<style scoped>
    .bottom-bar {
        height: 40px;
        background-color: #eee;
        position: relative;
        display: flex;
        font-size: 14px;
    }
    .check-content {
        width: 60px;
        display: flex; 
        align-items: center;
        margin-left: 10px; 
    }
    .check-button {
        width: 20px;
        height: 20px; 
        margin-right: 5px;  
    }
    .price {
        margin-left: 20px;
        flex: 1;  
        display: flex; 
        align-items: center;  
    }
    .buy {
        width: 100px;
        background-color:red;
        color: #fff;
        display: flex; 
        align-items: center;  
        justify-content: center;
    }
</style>