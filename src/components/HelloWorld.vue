<template>
  <div class="hello" id="img">
    <b-button variant="success"
      ><router-link to="/phoneview">(1)還原1張設計稿</router-link></b-button
    >
    <h3>{{ transfer }}</h3>
    <h3>{{ msg }}</h3>
    <b-button variant="success" @click="send">(4)子往父組件進行通訊</b-button>
    <h3>(5)封裝一個echart組件, 圖表類型隨意</h3>
    <div class="charts">
      <div
        id="barGraph"
        style="height: 350px; width: 500px; margin: auto"
      ></div>
    </div>
    <h3>(7)將一段dom結構生成一張base64圖片</h3>
    <b-button variant="success" @click="creatpic">生成圖片</b-button>
    <div id="canvas"></div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "HelloWorld",
  props: ["msg"],
  data() {
    return {
      author: {
        name: "Fenter",
      },
    };
  },
  mounted() {
    this.drawBar();
  },
  methods: {
    send() {
      this.author.name = "陳果汎";
    },
    creatpic() {
      html2canvas(document.getElementById("img")).then(function (canvas) {
        document.getElementById("canvas").appendChild(canvas);
      });
    },
    drawBar() {
      // 基於dom，初始化echarts範例
      let barGraph = echarts.init(document.getElementById("barGraph"));
      // 繪製圖表
      barGraph.setOption({
        title: {
          text: "全年產量趨勢圖",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        legend: {
          left: "center",
          data: ["本年", "上年"],
          bottom: 0,
        },
        xAxis: {
          type: "category",
          name: "x",
          splitLine: { show: false },
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "8%",
          containLabel: true,
        },
        yAxis: {
          type: "category",
          name: "y",
          splitLine: { show: true },
          data: [
            "10%",
            "20%",
            "30%",
            "40%",
            "50%",
            "60%",
            "70%",
            "80%",
            "90%",
            "100%",
          ],
        },
        series: [
          {
            name: "本年",
            type: "line",
            data: [
              0.8, 0.98, 0.96, 0.27, 0.81, 0.47, 0.74, 0.23, 0.69, 0.25, 0.36,
              0.56,
            ],
          },
          {
            name: "上年",
            type: "line",
            data: [
              1, 0.2, 0.4, 0.8, 0.16, 0.32, 0.64, 1.28, 5.6, 0.25, 0.63, 0.65,
              0.12,
            ],
          },
        ],
      });
    },
  },
  computed: {
    transfer() {
      return this.$store.state.transfer;
    },
  },
  watch: {
    author: {
      deep: true,
      handler(val) {
        this.$emit("update", val);
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>
