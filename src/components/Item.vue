<template>
  <div class="item">
    <img :src="itemInfo" />
  </div>
</template>
<script setup>
const props = defineProps({
  itemInfo: String,
});
</script>
<style scoped lang="less">
.item {
  width: calc(100vw - 20px);
  margin-bottom: 10px;
  img {
    height: 300px;
    width: 100%;
  }
}
</style>
