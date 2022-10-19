<script setup>
import { Cell, CellGroup, Image as VanImage } from "vant";
</script>

<template>
  <div class="main">
    <van-image
      round
      fit="cover"
      width="10rem"
      height="10rem"
      src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
    <div>username</div>
    <div class="cells">
      <cell-group>
        <cell title="Your Account" is-link />
        <cell title="Payment Method" is-link />
        <cell title="Delivery Info" is-link />

        <cell title="History Orders" is-link />
        <cell title="Settings" is-link />
        <cell title="Contact Us" is-link />
        <cell title="Terms of Service" is-link />
        <cell title="Version" value="v1.0.0" />
      </cell-group>
    </div>
  </div>
</template>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .cells {
    width: 100%;
  }
}
</style>
