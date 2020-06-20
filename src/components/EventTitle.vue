<template>
  <div>
    <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title"
             type="text"
             v-model="eventData.title"
      >
      <pre>{{ eventData.title }}</pre>
  </div>
</template>