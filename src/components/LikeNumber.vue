<template>
  <div>
    <p>いいね!!{{ halfNumber }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 10
    },
  },
  methods: {
    increment: function() {
      this.$emit("my-click", this.totalNumber + 1);
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