<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for ="name">ニックネーム:</label>
    <input
      id = "name"
      type = "text"
      v-model ="name"
    >
    <br><br>
    <label for ="comment">コメント:</label>
    <textarea 
      id ="comment"
      v-model ="comment"></textarea>
      <br>
      <button @click="createComment">コメントする</button>
    <h2>掲示板</h2>

    <Home></Home>
    <LikeHeader header-text="hello">
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>
    <LikeNumber :totalNumber="number" v-on:my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
    <test></test>
    <div style="padding: 10rem;">

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
      <input 
        type="checkbox"
        id="isPrivate"
        v-model="eventData.isPrivate"
      >
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>

      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">

      <input 
        type="radio"
        id="free"
        value="無料"
        v-model="eventData.price"
      >
      <label for="free">無料</label>
      <input 
        type="radio"
        id="paid"
        value="有料"
        v-model="eventData.price"
      >
      <label for="有料">有料</label>

      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option 
          v-for="location in locations" 
          :key="location"
          >{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader.vue';
  import Home from './components/Home.vue';
  import axios from 'axios';
  export default {
    data: function() {
      return {
        number: 10,
        locations: ["東京","大阪","名古屋","東京"],
        eventData: {
          title: "タイトル",
          maxNuber: 0,
          host: "",
          isPrivate: false,
          price: "無料",
          location: [],
          name: "",
          comment: "",
        }
      };
    },
    components: {
      LikeHeader,
      Home,
    },
    methods: {
      incrementNumber: function(value) {
        return this.number = value;
      },
      createComment() {
        axios.post();
      }
    },
  }
</script>

<style>

</style>
