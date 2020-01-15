<template>
    <div id="app">
        <router-view/>
        <Footer v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
    import Footer from './components/Footer.vue'

    export default {
        name: 'app',
        data() {
            return {
                name: this.$store.state.user,
                test: this.$store.state.member.test,
            }
        },
        components: {
            Footer
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
