<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('my-one', {
  props: ['title'],
  data: function(){
    return {

    }
  },
  template: '<h3>{{ title }}</h3>'
})
export default {
  name: 'App'
}
</script>

<style>

body{
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
}
</style>
