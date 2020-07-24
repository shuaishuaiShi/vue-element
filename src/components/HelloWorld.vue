<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in styleObj" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      test: '',
      number: 0,
      styleObj:{
        color: 'red',
        textAlign: 'center'
      }
    }
  },
  computed: {
    reversed: function(){
      return this.test.split('').reverse().join('');
    }
  },
  created: function(){
    this.debounceGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function(){
      this.number++;
    }
  },
  watch: {
    test: function(){
      this.time = new Date();
      this.debounceGetAnswer()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
