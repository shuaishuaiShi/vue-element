<template>
  <div class="main">
      <h1>this is Component</h1>
      <input type="text" @keyup.ctrl.67="test" @keyup.enter="test1">
      <div>
          <select v-model="selected" multiple>
              <option disabled>请选择</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
          </select>
          <span>select is: {{ selected }}</span>
      </div>

      <input type="text" v-model.lazy="msg">
      <p>{{msg}}</p>
      <test></test>
  </div>
</template>

<script>
import test from './test.vue'
export default {
    name: 'testComponent',
    components:{
        test
    },
    data () {
        return{
            title: '我是Component页面传过来的值',
            checked: false,
            showlist: [],
            selected: [],
            msg: 'test'
        }
    },
    methods:{
        test: function(){
            console.log("你使用了复制")
        },
        test1: function(){
            console.log("你按下了回车键")
        }
    }
}
</script>

<style>

</style>