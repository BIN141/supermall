import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    addCart(context, payload) {
        return new Promise((resovle, reject) => {
            // let oldProduct=null
            // for(let item of state.cartList){
            //     if(item.iid===payload.iid){
            //         oldProduct=item
            //     }
            // }
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                context.commit(ADD_COUNTER, oldProduct)
                resovle("当前的商品数量加1")
            } else {
                payload.count = 1
                context.commit(ADD_TO_CART, payload)
                resovle("添加了新商品")
            }
        })
    }
}   