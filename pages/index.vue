<template>
  <div class="container">
    <div v-for="post in posts" :key="post.id" class="pos">
      <h1 class="title"><a :href="post.link" target="_blank" rel="noopener" style="text-decoration:none;"> {{post.title}} </a></h1>
      <div class="b">
      <p v-if="post.name == 'alakhbar.info'">{{$t('sites.alakhbar')}} • </p>
      <p v-if="post.name == 'www.saharamedias.net'">{{$t('sites.saharamedias')}} • </p>
      <p v-if="post.name == 'tvm.mr'">{{$t('sites.tvm')}} • </p>
      <p v-if="post.name == 'www.bellewarmedia.com'">{{$t('sites.bellewarmedia')}} • </p>
      <p class="time">  {{$dayjs(post.isoDate).fromNow()}}  </p>
      </div>
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
  methods: {
  },
  beforeCreate () {
    axios.get('https://mersal-info.herokuapp.com/')
      .then((res) => {
        this.posts = res.data
      })
  },
  beforeMount () {
  }
}
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode a{
  color: #fff;
}
.dark-mode p h1{
  color: #fff;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.pos{
  margin: 10px;
}
.b{
    display: flex;
    text-align: center;
    justify-content: center;
}
.time{
  margin-right: 5px;
}
.title{
  text-decoration: none;
}
</style>
