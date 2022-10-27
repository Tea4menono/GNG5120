<script setup>
import { Cell, CellGroup } from "vant";

const props = defineProps({
  showList: Array,
});
</script>

<template>
  <div class="main">
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
}
</style>
