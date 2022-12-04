<template>
  <div ref="main" class="main"></div>

  <div @click="save">123</div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import html2pdf from "html2pdf.js";
import * as echarts from "echarts";
const main = ref(null);
onMounted(() => {
  var myChart = echarts.init(main.value);
  // 绘制图表
  myChart.setOption({
    title: {},
    tooltip: {},
    xAxis: {
      data: ["2018", "2019", "2020", "2021", "2022"],
      name: "Year",
      nameLocation: "center",
      nameGap: 50,
    },
    yAxis: {
      type: "value",
      name: "The number of publications",
      nameLocation: "center",
      nameGap: 50,
    },
    aria: {
      enabled: true,
      decal: {
        show: true,
      },
    },
    series: [
      {
        name: "price",
        type: "bar",
        data: [
          {
            value: 1140,
            itemStyle: {
              color: "#c8f7c5",
            },
          },
          {
            value: 1880,
            itemStyle: {
              color: "#c3ff68",
            },
          },
          {
            value: 2630,
            itemStyle: {
              color: "#93faa5",
            },
          },
          {
            value: 3180,
            itemStyle: {
              color: "#b2de27",
            },
          },
          {
            value: 2609,
            itemStyle: {
              color: "#0db4b9",
            },
          },
        ],
        barWidth: 50,
        label: {
          show: true,
          formatter: "{c}",
          color: "black",
          position: "top",
        },
      },
    ],
  });
});

const save = () => {
  html2pdf(main.value);
};
</script>
<style scoped lang="less">
.main {
  width: 1000px;
  height: 1000px;
}
</style>
