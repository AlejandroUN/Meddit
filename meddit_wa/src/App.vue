<template>
  <div id="app">
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'


export default {
    components: { AppFooter }
}
</script>


