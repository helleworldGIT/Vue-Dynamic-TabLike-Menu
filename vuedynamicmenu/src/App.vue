<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home <span>👇</span></router-link>
      <router-link to="/articles">Articles <span>👇</span></router-link>
      <router-link to="/gallery">Gallery <span>👇</span></router-link>
      <router-link to="/contact">Contact <span>👇</span></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
$font: 'Poppins', sans-serif;

#app{
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    color: inherit;
    margin: 0.667em;
    font-family: $font;
    text-decoration: none;
    span {
      display: none;
    }

    &.router-link-exact-active {
      span {
        display: inline-block;
      }
    }
  }
}
</style>
