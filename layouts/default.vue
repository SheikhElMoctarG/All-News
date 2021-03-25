<template>
  <div>
    <div class="header">
      <v-banner>{{ $t('news_new') }}</v-banner>
    </div>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<style>
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
  width: 400px;
  text-align: center;
}
.content{
  width: 400px;

}
@font-face{
  font-family: 'Tajawal';
  src: url('../fonts/Tajawal.ttf') format('truetype');
}
</style>
