<script setup>
import item from "./Item.vue";
import { ref } from "vue";
import { Search, Sticky } from "vant";
const keywords = ref("");
const imageList = ref([
  "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
]);
</script>

<template>
  <div class="main">
    <Sticky>
      <form action="/">
        <Search
          v-model="keywords"
          input-align="center"
          placeholder="Please enter your search terms"
        />
      </form>
    </Sticky>

    <div class="content">
      <item class="item" v-for="x in imageList" :itemInfo="x" />
    </div>
  </div>
</template>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  background: #f7f8fa;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
