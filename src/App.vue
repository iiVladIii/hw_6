<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
.news-style {
  text-align: left;
}
.return {
  text-align: right;
  margin-right: 5%;
  color: black;
}
h1 {
  color: black;
}
h3 {
  color: black;
  text-align: left;
  margin-left: 15%;
}
a {
  text-decoration: none;
  font-weight: bold;
  color: white;

  &.router-link-exact-active {
    color: #007cff;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #eeeeee;
    }
  }
}
.divs {
  float: left;
  background-color: #4A41C2;
  width: 30%;
  height: 500px;
  color: white;
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.divs1 {
  float: left;
  background-color: #4A41C2;
  width: 69%;
  height: 600px;
  margin-left: 1%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.divs2 {
  float: left;
  background-color: #4A41C2;
  width: 100%;
  height: 600px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
