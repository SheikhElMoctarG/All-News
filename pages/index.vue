<template>
  <div class="container">
    <div v-for="post in posts" :key="post.id" class="post">
      <h1>{{post.title}}</h1>
      <p>{{$dayjs(post.isoDate).fromNow()}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: []
    }
  },
  created () {
    axios.get('https://mersal-info.herokuapp.com/')
      .then((res) => {
        this.posts = res.data
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.post{
  margin: 10px;
}
</style>
