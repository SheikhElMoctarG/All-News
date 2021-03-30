<template>
  <div class="container">
    <div v-for="post in posts" :key="post.id" class="pos">
      <h1 class="title"><a :href="post.link" target="_blank" rel="noopener" style="text-decoration:none;"> {{post.title}} </a></h1>
      <div class="b">
      <p>{{post.name}} • </p>
      <p class="time">  {{$dayjs(post.isoDate).fromNow()}}  </p>
      </div>
    </div>
    <div class="bu">
      <button class="b2" v-on:click="viewMore"> {{$t('more')}} </button>
    </div>
    <div class="footer">
      <img src="../static/icon.png" style="margin-top: 5px; width: 50px; height: 50px;">
      <h3> {{$t('all_news')}} </h3>
      <p> {{$t('about1')}} <span>{{$t('sheikh')}} </span>  {{$t('about2')}} </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: [],
      m: 10
    }
  },
  beforeCreate () {
    axios.get('https://mersal-info.herokuapp.com/')
      .then((res) => {
        this.posts = res.data
        this.posts = this.posts.slice(0, this.m)
      })
  },
  methods: {
    viewMore () {
      this.m += 10
      axios.get('https://mersal-info.herokuapp.com/')
        .then((res) => {
          this.posts = res.data
          this.posts = this.posts.slice(0, this.m)
        })
    }
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
.b2{
  border-radius: 5px;
  background-color: blue;
  color: #fff;
  width: 95px;
  height: 30px;
}
.bu{
  max-width: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer{
  max-width: 640px;
  margin-top: 10px;
  border-style: groove none none none;
}
h3{
  margin: 5px;
}
.footer p{
  margin-bottom: 4px;
}
.footer p span{
  background-color: #eee;
  border-radius: 5px;
}
.dark-mode p span{
  background-color: #34495e;
  border-radius: 5px;
}
</style>
