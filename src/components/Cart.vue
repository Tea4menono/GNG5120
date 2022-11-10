<script setup>
import { Card, Button, SubmitBar } from "vant";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const remove = (id) => {
  store.commit("removeFromCart", id);
};

const onSubmit = () => {
  router.push({ path: "/checkout" });
};
</script>

<template>
  <div class="main">
    <Card
      v-for="x in store.state.showList.filter((e) => e.inCart)"
      num="2"
      :price="x.price"
      :desc="x.dp"
      currency="$"
      :title="x.name"
      :thumb="x.img"
    >
      <template #footer>
        <Button size="mini" @click="remove(x.id)">Remove</Button>
      </template>
    </Card>
    <submit-bar
      style="bottom: 60px"
      currency="$"
      :price="3050"
      button-text="Submit Order"
      @submit="onSubmit"
    />
  </div>
</template>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
}
</style>
