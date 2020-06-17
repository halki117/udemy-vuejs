<template>
  <div>
    <p>いいね!!{{ halfNumber }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: Number
  },
  methods: {
    increment: function() {
      this.number += 1;
    }
  },
  computed: {
    halfNumber: function() {
      return this.totalNumber / 2;
    }
  }
};
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>