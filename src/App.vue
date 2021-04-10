<template>
    <div v-cloak style="height: 100%;">
        <component :is="layout">
            <router-view :key="$route.path"></router-view>
        </component>
    </div>
</template>

<script>
const default_layout = "basic";

export default {
  name: "app",
    data() {
        return {
        }
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || default_layout) + "-layout";
        },
    },
}
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
