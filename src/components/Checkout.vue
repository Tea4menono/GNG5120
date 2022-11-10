<template>
  <NavBar left-arrow @click-left="onClickLeft" title="Checkout Counter" />
  <div>123</div>
</template>
<script setup>
import { NavBar } from "vant";

const onClickLeft = function () {
  history.back();
};
</script>
<style scoped lang="less"></style>
