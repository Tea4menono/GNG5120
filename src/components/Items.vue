<script setup>
import item from "./Item.vue";
import { ref } from "vue";
import { Search, Sticky, PullRefresh } from "vant";
import { useStore } from "vuex";
const store = useStore();
const keywords = ref("");
const loading = ref(false);
const onRefresh = () => {
  store.commit("addShowList");
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="main">
    <Sticky>
      <form action="/">
        <Search
          v-model="keywords"
          input-align="center"
          placeholder="Keywords"
        />
      </form>
    </Sticky>

    <pull-refresh v-model="loading" @refresh="onRefresh">
      <div class="content">
        <item
          class="item"
          v-for="info in store.state.showList.filter((e) => {
            if (!keywords) {
              return true;
            } else {
              return e.dp.includes(keywords) || e.name.includes(keywords);
            }
          })"
          :key="info.id"
          :info="info"
        />
      </div>
    </pull-refresh>
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
