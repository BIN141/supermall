<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="info-other">
          <span class="date">{{ commentInfo.created | showDate }}</span>
          <span>{{ commentInfo.style }}</span>
        </span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item,index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils"
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
      showDate(value){
          return formatDate(new Date(value*1000),'yyyy-mm-dd')
      }
  }
};
</script>

<style scoped>
    .comment-info {
        padding: 5px 12px;
        color:#333;
        border-bottom: 5px solid #f2f5f8;
    }
    .info-header {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
    .header-title {
        float: left;
        font-size: 15px;
    }
    .header-more {
        float: right;
        margin-right: 10px;
        font-size: 13px;
    }
    .info-user {
        height: 50px;
        font-size: 15px;
    }
    .info-user img {
        height: 45px;
        width: 40px;
        padding: 3px;
        vertical-align:middle
    }
    .info-detail p{
        font-size: 13px;
        margin: 5px 0;
        color: #333;
    }
    .info-other {
        font-size: 10px;
        color: rgba(51, 51, 51, 0.8);
        margin-bottom: 10px;
    }
    .info-other span {
        margin-right:10px;
    }
    .info-imgs img {
        margin-right: 5px;
        height: 60px;
        width: 60px;
    }
</style>