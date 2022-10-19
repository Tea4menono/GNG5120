<template>
  <div class="main">
    <Items v-if="active == 0" />
    <Favourite v-if="active == 1" />
    <Cart v-if="active == 2" />
    <Personal v-if="active == 3" />

    <tabbar v-model="active">
      <tabbar-item icon="wap-home">Items</tabbar-item>
      <tabbar-item icon="like">Favourite</tabbar-item>
      <tabbar-item icon="shopping-cart">Cart</tabbar-item>
      <tabbar-item icon="manager">Personal</tabbar-item>
    </tabbar>
  </div>
</template>
<script setup>
import { Tabbar, TabbarItem } from "vant";
import Items from "./components/Items.vue";
import Favourite from "./components/Favourite.vue";
import Cart from "./components/Cart.vue";
import Personal from "./components/Personal.vue";
import { ref } from "vue";

const active = ref(0);
</script>
<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
}
</style>
