<template>
<div>
  <div v-show="$route.params.id == 3">
    <h1>Ниндзя</h1>
    <div v-if="textAdd"><button @click="func()">В избранное</button></div><div v-if="textRemove"><button v-if="textRemove" @click="removeTolocalStorage">Удалить из избранного</button></div><br>
    <video autoplay height=40% width=50% controls="controls" src="../assets/video1.mp4"></video>
  </div>
  <div class="return"><router-link to="/" class="return">На главную</router-link></div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'news1',
  data () {
    return {
      textAdd: true,
      textRemove: false
    }
  },
  // methods: {
  //   lalala () {
  //     localStorage.name3 = 'Смешное видео с котиком'
  //   },
  //   lalalal () {
  //     localStorage.removeItem('name3')
  //   }
  // }
  // methods: {
  //   addTolocalStorage () {
  //     this.textAdd = false
  //     this.textRemove = true
  //     localStorage.name1 =
  //   },
  //   removeTolocalStorage () {
  //     this.textAdd = true
  //     this.textRemove = false
  //   }
  // }
  computed: {
    ...mapGetters({
      news: 'NEWS'
    })
  },
  methods: {
    func () {
      console.log(this.news[0].text)
    }
  }
}
</script>

<style scoped>

</style>
