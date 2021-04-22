<template>
<div>
  <div class="divs">
    Menu <br>
    <router-link to="/">Новости</router-link> <br>
    <router-link to="/userPage">Моя страница</router-link>
    <br>
    <div><router-link to="/userPage/favorite">Избранное</router-link></div> <br>
    <div class="divImg">
      <img src="../assets/ava.png" width="100%" height="70%" style="margin-top: 10%" >
    </div>
    <ul class="text1">
      <li>Patrick</li>
      <li>Количество записей: 1</li>
      <li>Статус: online</li>
    </ul>
  </div>
  <div class="divs1">
    <h1>Записи</h1>
    <div>
      <h3>
        <router-link to="/userPage/news1">{{news[0].text}}</router-link>
      </h3>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'User',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      news: 'NEWS'
    })
  }
}
</script>

<style lang="scss">
.divImg{
  background-color: white;
  height: 20%;
  width: 35%;
  margin-left: 20%;
}
.userAvatar{
  height: 20%;
  width: 0%;
  background-color: #4A41C2;
  font-size: 20px;
  color: white;
}
.text1 {
  text-align: left;
  size: 15px;
}
</style>
