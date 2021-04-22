<template>
  <div class="divs2">
    <h1>Избранное</h1>
    <div v-if="favorite1 === news[1].text">
      <h3>
        <router-link to="/news2">{{favorite1}}</router-link>
      </h3>
    </div>
  <div v-if="favorite2 === news[2].text">
    <h3>
      <router-link to="/news3">{{favorite2}}</router-link>
    </h3>
  </div>
    <div><router-link to="/userPage">Назад</router-link></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'favorite',
  data () {
    return {
      favorite1: localStorage.favorite1,
      favorite2: localStorage.favorite2
    }
  },
  computed: {
    ...mapGetters({
      news: 'NEWS'
    })
  }
}

</script>

<style scoped>

</style>
