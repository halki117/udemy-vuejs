<template>
  <div>
    <LikeHeader header-text="hello">
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>
    <LikeNumber :totalNumber="number" v-on:my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
    <test></test>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title"
             type="text"
             v-model="eventData.title"
      >
      <label for="title">最大人数</label>
      <input id="maxNumber"
             type="number"
             v-model.number="eventData.maxNumber"
      >
      <p>{{ eventData.title }}</p>

      <label for="host">主催者</label>
      <input id="host"
             type="test"
             v-model.trim="eventData.host"
      >
      <p>{{ eventData.host }}</p>
    </div>
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader';

  export default {
    data: function() {
      return {
        number: 10,
        eventData: {
          title: "タイトル",
          maxNuber: 0,
          host: ""
        }
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
