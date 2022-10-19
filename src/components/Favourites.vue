<script setup>
import { Card, Icon } from "vant";
const props = defineProps({
  showList: Array,
});
</script>

<template>
  <div class="main">
    <Card
      v-for="x in showList.filter((e) => e.favourite)"
      :desc="x.dp"
      :title="x.name"
      :thumb="x.img"
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
