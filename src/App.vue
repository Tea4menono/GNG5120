<template>
  <div class="main">
    <Items
      v-show="active == 0"
      :showList="showList"
      @reverseFavourite="reverseFavourite"
      @addShowList="addShowList"
    />
    <Favourites v-show="active == 1" :showList="showList" />
    <Cart v-show="active == 2" :showList="showList" @remove="remove" />
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
import { Tabbar, TabbarItem, Toast, Badge } from "vant";
import Items from "./components/Items.vue";
import Cart from "./components/Cart.vue";
import Favourites from "./components/Favourites.vue";
import Personal from "./components/Personal.vue";
import { ref, reactive } from "vue";
const showList = reactive([
  {
    img: "https://www.ikea.com/ca/en/images/products/livsar-led-string-light-with-12-lights-indoor-battery-operated-gray-white__0884812_pe710188_s5.jpg?f=xl",
    id: 3,
    name: "LIVSÅR",
    dp: "LED string light with 12 lights, indoor/battery operated gray/white",
    price: 14.99,
    favourite: true,
    inCart: true,
    createdTime: 1666152447625,
  },
  {
    img: "https://www.ikea.com/ca/en/images/products/strala-lamp-shade-multicolor-folklore__1068125_pe852975_s5.jpg?f=xl",
    id: 2,
    name: "STRÅLA",
    dp: "Lamp shade, multicolor/folklore, 28  (70 cm)",
    price: 7.99,
    favourite: false,
    inCart: true,
    createdTime: 1666152447625,
  },
  {
    img: "https://www.ikea.com/ca/en/images/products/tagarp-floor-uplighter-black-white__0810839_pe771437_s5.jpg?f=xl",
    id: 1,
    name: "TÅGARP",
    dp: "Floor uplighter, black/white",
    price: 12.99,
    favourite: false,
    inCart: true,
    createdTime: 1666152447625,
  },
]);
const active = ref(0);
const reverseFavourite = function (id) {
  let target = showList.filter((item) => item.id == id)[0];
  target.favourite = !target.favourite;
};
const addShowList = () => {
  if (showList.length == 6) {
    setTimeout(() => {
      Toast.fail("Nothing New");
    }, 1000);
  } else {
    setTimeout(() => {
      Toast.success("New Content Discovered");
      if (showList.length == 3) {
        showList.unshift({
          img: "https://www.ikea.com/ca/en/images/products/strala-led-string-light-with-80-lights-battery-operated-mini-star-gold-colour__0954493_pe803349_s5.jpg?f=xl",
          id: 4,
          name: "STRÅLA",
          dp: "LED string light with 80 lights, battery operated mini/star gold-colour",
          price: 14.99,
          favourite: false,
          inCart: false,
          createdTime: 1666152447625,
        });
        return;
      }
      if (showList.length == 4) {
        showList.unshift({
          img: "https://www.ikea.com/ca/en/images/products/aedelloevtraed-led-block-candle-set-of-3-white-indoor__1061760_pe850547_s5.jpg?f=xl",
          id: 6,
          name: "ÄDELLÖVTRÄD",
          dp: "LED block candle, set of 3, white/indoor",
          price: 17.99,
          favourite: false,
          inCart: false,
          createdTime: 1666152447625,
        });
        return;
      }
      if (showList.length == 5) {
        showList.unshift({
          img: "https://www.ikea.com/ca/en/images/products/snoeyra-led-string-light-with-40-lights-indoor-battery-operated-silver-color__0884666_pe674258_s5.jpg?f=xl",
          id: 5,
          name: "SNÖYRA",
          dp: "LED string light with 40 lights, indoor/battery operated silver color",
          price: 12.99,
          favourite: false,
          inCart: false,
          createdTime: 1666152447625,
        });
        return;
      }
    }, 1000);
  }
};

const remove = (id) => {
  showList.filter((e) => e.id == id)[0].inCart = false;
};
</script>
<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
}
</style>
