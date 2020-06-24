<template>
  <div>
    <meter class="test" max="100" low="20" high="40" value="100"></meter>
    <slot>デフォルトのタイトル</slot>
    <p>{{ headerText }}</p>
  </div>
</template>

// <script>
export default {
  props: ["headerText"],
  // data: function() {
  //   return {
  //     good: 'いいね！！！'
  //   };
  // }
};
</script>