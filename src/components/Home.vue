<template>
  <div class="main">
    <Items v-show="active == 0" />
    <Favourites v-show="active == 1" />
    <Cart v-show="active == 2" />
    <Personal v-show="active == 3" />
  </div>

  <tabbar v-model="active">
    <tabbar-item icon="wap-home" badge="5">Items</tabbar-item>
    <tabbar-item icon="like">Favourite</tabbar-item>
    <tabbar-item icon="shopping-cart">Cart</tabbar-item>
    <tabbar-item icon="manager" dot>Personal</tabbar-item>
  </tabbar>
</template>
<script setup>
import { Tabbar, TabbarItem } from "vant";
import Items from "./Items.vue";
import Cart from "./Cart.vue";
import Favourites from "./Favourites.vue";
import Personal from "./Personal.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const Route = useRoute();
const active = ref(0);

if (Route.query.type) {
  active.value = 2;
}
</script>
<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
}
</style>
