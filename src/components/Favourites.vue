<script setup>
import { Card, Icon } from "vant";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const viewDetail = function (id) {
  router.push({ path: "/detail", query: { id: id } });
};
</script>

<template>
  <div class="main">
    <Card
      v-for="x in store.state.showList.filter((e) => e.favourite)"
      :desc="x.dp"
      :title="x.name"
      :thumb="x.img"
      @click="viewDetail(x.id)"
    >
      <template #tags>
        <Icon color="red" name="like" size="20" />
      </template>
    </Card>
  </div>
</template>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
}
</style>
