<template>
  <div>
    <p>僕の名前は{{ name }}</p>
    <button v-on:click="testMethod"></button>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      name: 'halki'
    };
  },
  methods: {
    testMethod: function() {
      console.log('ok');
    }
  }
};
</script>

<style >
  button {
    width: 50px;
    height: 20px;
  }
</style>