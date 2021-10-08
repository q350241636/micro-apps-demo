<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vue2主应用" v-if="false" />
    <button @click="refresh">重新加载</button>

    <button @click="changeRouter('react')">切换react应用</button>
    <!-- <button @click="changeRouter('angular')">切换angular应用</button>
    <button @click="changeRouter('html')">切换html应用</button> -->

    <div>
      <router-link to="/apps/react/page1">react页面01</router-link>
      <router-link to="/apps/react/page2">react页面02</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    refresh() {
      this.$router.push("/");
      location.reload();
    },
    changeRouter(name) {
      this.$router.push(`/apps/${name}`);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
