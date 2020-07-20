<template>
  <div class="hello">
    <p>{{ time }}</p>
    <p><span v-html="rawHtml"></span></p>
    <p>{{ reversed }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      time: '2020-07-16',
      test: '练习vue',
      rawHtml: '<span style="color:red;">This is red</span>'
    }
  },
  computed: {
    reversed: function(){
      return this.test.split('').reverse().join('');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
