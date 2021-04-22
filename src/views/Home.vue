<template>
  <div class="home">
    <div class="divs">
        Menu <br>
      <router-link to="/">Новости</router-link> <br>
      <router-link to="/userPage">Моя страница</router-link>
    </div>
    <div class="divs1">
      <h1>Новости</h1>
      <div>
        <h3>
          <router-link to="/userPage/news1">{{news[0].text}}</router-link>
        </h3>
      </div>
      <div>
        <h3>
          <router-link to="/news2">{{news[1].text}} </router-link>
        </h3>
      </div>
      <div>
        <h3>
          <router-link to="/news3">{{news[2].text}}</router-link>
        </h3>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import news from '../news.vue'
export default {
  name: 'Home',
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
