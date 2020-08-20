<template>
  <div id="main">
      <h1>{{msg}}</h1>
      <h2>111</h2>
  </div>
</template>

<script>
export default {
    name: 'test',
    data(){
        return{
            msg: '用来测试的组件'
        }
    },
    created(){
        console.log("我是test页面")
    }
}
</script>

<style>

</style>