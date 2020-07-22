<template>
  <div class="hello">
    <p>{{ number }}</p>
    <p>{{ time }}</p>
    <input type="text" v-model="test">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      time: new Date(),
      test: '',
      number: 0
    }
  },
  computed: {
    reversed: function(){
      return this.test.split('').reverse().join('');
    }
  },
  created: function(){
    this.debounceGetAnswer = _.debounce(this.getAnswer, 500)
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
