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
    metaInfo() {
        return {
            title: "Epiloge - Build your network in your field of interest",
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                { property: 'og:site_name', content: 'Epiloge'},
                {property: 'og:type', content: 'website'},
                {name: 'robots', content: 'index,follow'}
            ]
        }
    }
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
