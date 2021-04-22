import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show1: null,
    show2: null,
    show3: null,
    news: [
      { id: 1, text: 'Apple представила iMac на чипе M1 в семи ярких цветах смотреть видео' },
      { id: 2, text: 'Открытый бета-тест новой версии Хабра' },
      { id: 3, text: 'Видео с котиком' }
    ],
    favorite: []
  },
  mutations: {
    addFavorite (state, i) {
      switch (i) {
        case 1:
          if (this.state.show1 === true) {
            this.state.show1 = false
          } else {
            this.state.show1 = true
          }
          alert('Нельзя добавлять свои записи')
          break
        case 2:
          if (this.state.show2 === true) {
            this.state.show2 = false
          } else {
            this.state.show2 = true
          }
          this.state.favorite.push(this.state.news[1])
          if (localStorage.favorite1 === this.state.news[1].text) {
            localStorage.removeItem('favorite1')
          } else localStorage.favorite1 = this.state.news[1].text
          break
        case 3:
          if (this.state.show3 === true) {
            this.state.show3 = false
          } else {
            this.state.show3 = true
          }
          this.state.favorite.push(this.state.news[2])
          if (localStorage.favorite2 === this.state.news[2].text) {
            localStorage.removeItem('favorite2')
          } else localStorage.favorite2 = this.state.news[2].text
          break
      }
      // localStorage.favorite = JSON.stringify(this.state.favorite)
      // console.log(localStorage.favorite[0].text)
    }
  },
  actions: {
  },
  modules: {},
  getters: {
    NEWS: state => {
      return state.news
    },
    FAVORITE: state => {
      return state.favorite
    },
    SHOW1: state => {
      return state.show1
    },
    SHOW2: state => {
      return state.show2
    },
    SHOW3: state => {
      return state.show3
    }
  }
})
