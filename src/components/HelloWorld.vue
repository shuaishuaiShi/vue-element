<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in styleObj" :key="index">{{item}}</li>
    </ul>
    <!-- <div>
      <button @click="ArrayPractice(1)">concat</button>
      <button @click="ArrayPractice(2)">shift</button>
      <button @click="ArrayPractice(3)">pop</button>
      <button @click="ArrayPractice(4)">unshift</button>
      <button @click="ArrayPractice(5)">push</button>
      <button @click="ArrayPractice(6)">reverse</button>
      <button @click="ArrayPractice(7)">slice</button>
      <button @click="ArrayPractice(8)">sort(顺序)</button>
      <button @click="ArrayPractice(9)">sort(反序)</button>
    </div> -->
    <test-one :title="title"></test-one>
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
      },
      oneArray: ['0','1','2'],
      twoArray: ['4','5','6'],
      threeArray: ['7','8','9'],
      title: '我是Component页面传过来的值'
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
    },
    ArrayPractice: function(x){
      if(x === 1) {
        console.log(this.oneArray.concat(this.twoArray, this.threeArray));
      }
      else if(x === 2) {
        console.log(this.oneArray.shift());
      }
      else if(x === 3) {
        console.log(this.oneArray.pop());
      }
      else if(x === 4) {
        this.oneArray.unshift('0');
        console.log(this.oneArray);
      }
      else if(x === 5) {
        this.oneArray.push('3');
        console.log(this.oneArray);
      }
      else if(x === 6) {
        console.log(this.oneArray.reverse());
      }
      else if(x === 7) {
        console.log(this.oneArray.slice(1,3))
      }
      else if(x === 8) {
        console.log(this.oneArray.sort(function(a,b){return a-b}))
      }
      else if(x === 9) {
        console.log(this.oneArray.sort(function(a,b){return b-a}))
      }
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
