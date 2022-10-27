<script setup>
import { Cell, CellGroup, Popup, Image as VanImage, Icon } from "vant";
import { ref } from "vue";

const account = ref(false);
const paymentMethod = ref(false);
const deliveryInfo = ref(false);
const historyOrders = ref(false);

const showAccount = () => {
  account.value = true;
};
const showPaymentMethod = () => {
  paymentMethod.value = true;
};
const showDeliveryInfo = () => {
  deliveryInfo.value = true;
};
const showHistoryOrders = () => {
  historyOrders.value = true;
};
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
      <cell-group inset>
        <cell title="Your Account" is-link @click="showAccount" />
        <cell title="Payment Method" is-link @click="showPaymentMethod" />
        <cell title="Delivery Info" is-link @click="showDeliveryInfo" />
        <cell title="History Orders" is-link @click="showHistoryOrders" />
        <cell title="Settings" is-link />
        <cell title="Contact Us" is-link />
        <cell title="Terms of Service" is-link />
        <cell title="Version" value="v1.0.0" />
      </cell-group>
    </div>

    <popup
      v-model:show="account"
      position="right"
      :style="{
        width: '80%',
        height: '100%',
        background: '#f7f8fa',
        'padding-top': '30px',
      }"
    >
      <cell-group inset>
        <cell title="Nickname" value="111" />
        <cell title="Gender" value="Male" />
        <cell title="ID" value="1231231" />
        <cell title="Area" value="Toronto" />
      </cell-group>
    </popup>

    <popup
      v-model:show="paymentMethod"
      position="right"
      :style="{
        width: '80%',
        height: '100%',
        background: '#f7f8fa',
        'padding-top': '30px',
      }"
    >
      <cell-group inset>
        <cell title="Paypal" value="test" label="****1212" />
        <cell title="Debit Card" value="test" label="****1212" />
        <cell title="Credit Card" value="test" label="****1212" />
        <cell>
          <template #title>
            Add More Payment Methods <icon name="add-o"
          /></template>
        </cell>
      </cell-group>
    </popup>

    <popup
      v-model:show="deliveryInfo"
      position="right"
      :style="{
        width: '80%',
        height: '100%',
        background: '#f7f8fa',
        'padding-top': '30px',
      }"
    >
      <cell-group inset>
        <cell title="Address 1" value="Main" label="Avenue 112" />
        <cell title="Address 2" label="Avenue 77788" />
        <cell>
          <template #title> Add More Addresses <icon name="add-o" /></template>
        </cell>
      </cell-group>
    </popup>

    <popup
      v-model:show="historyOrders"
      position="right"
      :style="{
        width: '80%',
        height: '100%',
        background: '#f7f8fa',
        'padding-top': '30px',
      }"
    >
      <cell-group inset>
        <cell title="Item 1" value="Delivered" label="$11.91">
          <template #title>
            Item 1<img
              src="https://www.ikea.com/ca/en/images/products/strala-lamp-shade-multicolor-folklore__1068125_pe852975_s5.jpg?f=xl"
              alt=""
            />
          </template>
        </cell>
        <cell title="Item 2" value="In Shipping" label="$22.91">
          <template #title>
            Item 2<img
              src="https://www.ikea.com/ca/en/images/products/tagarp-floor-uplighter-black-white__0810839_pe771437_s5.jpg?f=xl"
              alt=""
            />
          </template>
        </cell>
      </cell-group>
    </popup>
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
    background: "#f7f8fa";
    width: 100%;
  }

  img {
    height: 100px;
    width: 100px;
  }
}
</style>
