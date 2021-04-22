<template>
  <div>
      <h1>{{news[2].text}}</h1>
      <div><button @click="addFavorite(3)">{{ fava }}</button></div>
      <video height=40% width=50% controls="controls" src="../assets/video1.mp4"></video>
    <div class="return"><router-link to="/" class="return">Главная</router-link></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'news3',
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations({
      addFavorite: 'addFavorite'
    })
  },
  computed: {
    ...mapGetters({
      news: 'NEWS',
      show: 'SHOW3'
    }),
    fava () {
      if (this.show === true) {
        return 'Удалить из избранного'
      } return 'Добавить в избранное'
    }
  }
}
</script>

<style scoped>

</style>
