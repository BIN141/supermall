<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    // props: {
    //     message:{
    //         type:String,
    //         dafault:''
    //     },
    //     show:{
    //         type:Boolean,
    //         dafault:false
    //     }
    // },
    data () {
        return {
            message:'',
            isShow:false
        }
    },
    methods: {
        show(message,duration=1000){
            this.isShow=true
            this.message=message

            setTimeout(()=>{
                this.isShow=false
                this.message=''
            },duration)
        }
    }
}
</script>

<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        padding: 8px 10px;
        background-color: rgba(0,0,0,.75);
        z-index: 999;
    }
</style>