<template>
  <NavBar left-arrow @click-left="onClickLeft" title="Item Detail" />

  <div class="main">
    <div class="item">
      <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <swipe-item> <img :src="targetItem.img" /></swipe-item>
        <swipe-item> <img :src="targetItem.img" /></swipe-item>
        <swipe-item> <img :src="targetItem.img" /></swipe-item>
        <swipe-item> <img :src="targetItem.img" /></swipe-item>
      </Swipe>

      <div>{{ targetItem.name }}</div>
      <div>{{ targetItem.dp }}</div>
      <div>${{ targetItem.price }}</div>
      <div>Posted at {{ timeConvert(targetItem.createdTime) }}</div>
      <div>
        <Icon
          v-if="!targetItem.favourite"
          @click="setFavourite"
          name="like-o"
        />
        <Icon
          v-if="targetItem.favourite"
          @click="setFavourite"
          color="red"
          name="like"
        />
      </div>
    </div>

    <van-action-bar>
      <van-action-bar-icon
        @click="jumpToCart"
        icon="cart-o"
        text="Cart"
        :badge="store.state.showList.filter((e) => e.inCart).length"
      />
      <van-action-bar-icon
        v-if="!targetItem.favourite"
        icon="like-o"
        @click="setFavourite"
        color="#ff5000"
      />
      <van-action-bar-icon
        v-if="targetItem.favourite"
        icon="like"
        @click="setFavourite"
        color="#ff5000"
      />

      <van-action-bar-button
        v-if="!targetItem.inCart"
        type="warning"
        text="Add to Cart"
        @click="addToCart"
      />
      <van-action-bar-button
        v-if="targetItem.inCart"
        type="warning"
        text="Remove from Cart"
        @click="removeFromCart"
      />

      <van-action-bar-button type="danger" text="Purchase Now" />
    </van-action-bar>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { NavBar, Icon, Toast, Swipe, SwipeItem } from "vant";
import moment from "moment";
import { useStore } from "vuex";
const store = useStore();
const Route = useRoute();

const targetItem = store.state.showList.filter(
  (e) => e.id == Route.query.id
)[0];
const timeConvert = function (timeStamp) {
  return moment(timeStamp).format("YYYY-MM-DD hh:mm:ss");
};
const setFavourite = function () {
  if (targetItem.favourite) {
    Toast.success("Successfully Removed!");
  } else {
    Toast.success("Successfully Added!");
  }
  store.commit("reverseFavourite", targetItem.id);
};
const onClickLeft = function () {
  history.back();
};
const addToCart = function () {
  store.commit("addToCart", targetItem.id);
};
const removeFromCart = function () {
  store.commit("removeFromCart", targetItem.id);
};
const router = useRouter();

const jumpToCart = function () {
  router.push({ path: "/home", query: { type: "cart" } });
};
</script>
<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .item {
    width: calc(100vw - 20px);
    margin-bottom: 50px;
    img {
      height: 300px;
      width: 100%;
    }
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
