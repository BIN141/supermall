import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        // 监听item中图片加载完成
        const newRefresh = debounce(this.$refs.scroll.refresh, 500);
        this.itemImgListener = () => {
            newRefresh();
        }
        this.$bus.$on("itemImageLoad", this.itemImgListener);
    }
}

export const backTopMixin = {
    components: {
        BackTop
    }, 
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
        ListenShopBackTop(position){
            this.isShowBackTop=-position.y>this.BACK_POSITION
        }
    }
}