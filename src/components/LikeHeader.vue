<template>
  <div>
    <slot>デフォルトのタイトル</slot>
    <p>{{ headerText }}</p>
  </div>
</template>

// <script>
export default {
  props: ["headerText"]
  // data: function() {
  //   return {
  //     good: 'いいね！！！'
  //   };
  // }
};
</script>