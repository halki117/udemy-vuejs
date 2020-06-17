<template>
  <div>
    <LikeHeader header-text="hello">
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>
    <LikeNumber :totalNumber="number" v-on:my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
    <test></test>
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader';

  export default {
    data: function() {
      return {
        number: 10
      };
    },
    components: {
      LikeHeader
    },
    methods: {
      incrementNumber: function(value) {
        return this.number = value;
      },
    },
  }
</script>

<style>

</style>
