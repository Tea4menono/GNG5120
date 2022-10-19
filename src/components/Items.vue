<script setup>
import item from "./Item.vue";
import { ref } from "vue";
import { Search, Sticky, PullRefresh, Toast } from "vant";
const keywords = ref("");
const showList = ref([
  {
    img: "https://www.ikea.com/ca/en/images/products/strala-lamp-shade-multicolor-folklore__1068125_pe852975_s5.jpg?f=xl",
    id: 1,
    name: "STRÅLA",
    dp: "Lamp shade, multicolor/folklore, 28  (70 cm)",
    price: 7.99,
    favourite: false,
    createdTime: 1666152447625,
  },
  {
    img: "https://www.ikea.com/ca/en/images/products/tagarp-floor-uplighter-black-white__0810839_pe771437_s5.jpg?f=xl",
    id: 2,
    name: "TÅGARP",
    dp: "Floor uplighter, black/white",
    price: 12.99,
    favourite: false,
    createdTime: 1666152447625,
  },
]);

const storageList = ref([
  {
    img: "https://www.ikea.com/ca/en/images/products/aedelloevtraed-led-block-candle-set-of-3-white-indoor__1061760_pe850547_s5.jpg?f=xl",
    id: 6,
    name: "ÄDELLÖVTRÄD",
    dp: "LED block candle, set of 3, white/indoor",
    price: 17.99,
    favourite: false,
    createdTime: 1666152447625,
  },
  {
    img: "https://www.ikea.com/ca/en/images/products/snoeyra-led-string-light-with-40-lights-indoor-battery-operated-silver-color__0884666_pe674258_s5.jpg?f=xl",
    id: 5,
    name: "SNÖYRA",
    dp: "LED string light with 40 lights, indoor/battery operated silver color",
    price: 12.99,
    favourite: false,
    createdTime: 1666152447625,
  },
  {
    img: "https://www.ikea.com/ca/en/images/products/strala-led-string-light-with-80-lights-battery-operated-mini-star-gold-colour__0954493_pe803349_s5.jpg?f=xl",
    id: 4,
    name: "STRÅLA",
    dp: "LED string light with 80 lights, battery operated mini/star gold-colour",
    price: 14.99,
    favourite: false,
    createdTime: 1666152447625,
  },
  {
    img: "https://www.ikea.com/ca/en/images/products/livsar-led-string-light-with-12-lights-indoor-battery-operated-gray-white__0884812_pe710188_s5.jpg?f=xl",
    id: 3,
    name: "LIVSÅR",
    dp: "LED string light with 12 lights, indoor/battery operated gray/white",
    price: 14.99,
    favourite: false,
    createdTime: 1666152447625,
  },
]);

const reverseFavourite = function (id) {
  let target = showList.value.filter((item) => item.id == id)[0];
  target.favourite = !target.favourite;
};

const loading = ref(false);
const onRefresh = () => {
  if (storageList.value.length == 0) {
    setTimeout(() => {
      loading.value = false;
      Toast.fail("Nothing New");
    }, 1000);
  } else {
    setTimeout(() => {
      loading.value = false;
      showList.value.unshift(storageList.value.pop());
      Toast.success("New Content Discovered");
    }, 1000);
  }
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
          v-for="info in showList"
          :key="info.id"
          :info="info"
          @reverseFavourite="reverseFavourite"
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
