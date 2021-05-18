<template>
  <div>
    <div class="header">
      <v-banner>
        <div class="navbar">
          <img v-on:click="mo()" v-if="$colorMode.value=='light'" src="../assets/moon-light.svg" alt="" srcset="">
          <img v-on:click="mo()" v-if="$colorMode.value=='dark'" src="../assets/moon-night.svg" alt="" srcset="">
          <h1 class="nav">{{ $t('news_new') }}</h1>
        </div>
      </v-banner>
      <div class="alert">
        <img class="ic" src="../static/icon-alert.svg" alt="">
        <p> {{$t('alert')}} </p>
      </div>
    </div>
    <ul>
     <li>Hhhh2</li>
     <li>Hhhh2</li>
     <li>Hhhh2</li>
     <li>Hhhh2</li>
     <li>Hhhh2</li>
    </ul>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    mo () {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.value = 'dark'
      } else if (this.$colorMode.value === 'dark') {
        this.$colorMode.value = 'light'
      }
    }
  }
}
</script>
<style>
.navbar{
  align-items: center;
  display: flex;
  justify-content: center;
}
html {

  font-family: 'Tajawal', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.header{
  max-width: 640px;
  text-align: center;
}
.content{
  max-width: 640px;
}
@font-face{
  font-family: 'Tajawal';
  src: url('../fonts/Tajawal.ttf') format('truetype');
}
.alert{
  max-width: 640px;
  height: 50px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 5px;
}
.alert img{
  width: 30px;
  height: 30px;
  margin: 3px;
}
.alert p{
  color: #fff;
  font-size: 16dp;
}
.light-mode body{
  background-color: #fff;
  color: rgba(0,0,0,0.8);

}
.light-mode a{
  color: #091a28;
}
.dark-mode body {
  background-color: #091a28;
}
.dark-mode h1{
  color: #fff;
}
.dark-mode span{
  background-color: #34495e;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
.nav{
  font-size: 18px;
}
.header img{
  width: 20px;
  height: 20px;
  margin: 10px;
}

</style>
