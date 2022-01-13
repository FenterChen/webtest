<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ author.name }}
    <HelloWorld msg="(4)父往子組件進行通訊" @update="updatinfo" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "HomeView",
  data() {
    return {
      author: [],
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    updatinfo(val) {
      this.$set(this.author, val);
      this.author = val;
    },
  },
};
</script>
