<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :totalNumber="number"></LikeNumber>
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
    }
  }
</script>

<style>

</style>
