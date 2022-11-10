<template>
  <div class="item" @click="viewDetail">
    <img :src="info.img" />
    <div>{{ info.name }}</div>
    <div>{{ info.dp }}</div>
    <div>${{ info.price }}</div>
    <div>Posted at {{ timeConvert(info.createdTime) }}</div>
    <div>
      <Icon v-if="!info.favourite" @click="setFavourite" name="like-o" />
      <Icon
        v-if="info.favourite"
        @click="setFavourite"
        color="red"
        name="like"
      />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { Icon, Toast } from "vant";
import moment from "moment";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
  info: Object,
});
const router = useRouter();

const timeConvert = function (timeStamp) {
  return moment(timeStamp).format("YYYY-MM-DD hh:mm:ss");
};
const setFavourite = function () {
  if (props.info.favourite) {
    Toast.success("Successfully Removed!");
  } else {
    Toast.success("Successfully Added!");
  }
  store.commit("reverseFavourite", props.info.id);
};

const viewDetail = function () {
  router.push({ path: "/detail", query: { id: props.info.id } });
};
</script>
<style scoped lang="less">
.item {
  width: calc(100vw - 20px);
  margin-bottom: 50px;
  img {
    height: 300px;
    width: 100%;
  }
}
</style>
