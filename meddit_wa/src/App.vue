<template>
  <div id="app">
    <NavBar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import NavBar from './components/NavBar.vue'

export default {
    components: { AppFooter, NavBar }
}
</script>


