<template>
  <div class="hello" id="img">
    <h1>{{ transfer }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
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
    this.drawPie();
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
    drawPie() {
      let pieGraph = echarts.init(document.getElementById("pieGraph"));
      pieGraph.setOption({
        title: {
          text: "某站點使用者存取來源",
          subtext: "純屬虛構",
          x: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接存取", "郵件行銷", "聯盟廣告", "視訊廣告", "搜尋引擎"],
        },
        series: [
          {
            name: "存取來源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接存取" },
              { value: 310, name: "郵件行銷" },
              { value: 234, name: "聯盟廣告" },
              { value: 135, name: "視訊廣告" },
              { value: 1548, name: "搜尋引擎" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
