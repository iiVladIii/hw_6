<template>
  <div>
    <div><button @click="addFavorite(1)">Добавить в избранное</button></div>
    <div>{{fava}}</div>
    <h1>{{news[0].text}}</h1>
    <img src="../assets/mac.jpeg" height="60%" width="60%"> <br>
    20 апреля 2021 года на весенней презентации Apple представила новые тонкие iMac на чипе M1. Фирменные моноблоки доступны в семи ярких цветах: синий, зеленый, розовый, серебристый, желтый, оранжевый и фиолетовый.<br>
    <img src="../assets/mac2.jpeg" height="60%" width="60%"> <br>
    Характеристики новых iMac на чипе M1 (на 85 % мощнее и по обработке графики до двух раз быстрее по сравнению с прошлым iMac с дисплеем 21,5 дюйма на процессоре Intel)
    <ul style="text-align: left">
      <li>8‑ядерный чип Apple M1;</li>
      <li>от 8 до 16 ГБ ОЗУ;</li>
      <li>накопитель от 256 ГБ до 2 ТБ;</li>
      <li>дисплей Retina 24 дюйма с разрешением 4,5K (4480×2520 пикселей, 218 пикселей на дюйм) с яркостью 500 кд/м² и антибликовым покрытием, фактический размер диагонали дисплея составляет 23,5 дюйма;</li>
      <li>два порта Thunderbolt/USB 4, два порта USB 3, выход 3,5 мм для наушников;</li>
      <li>Wi‑Fi 6 (802.11ax), Bluetooth 5.0;</li>
      <li>камера FaceTime HD 1080p с процессором обработки сигнала изображения в чипе M1;</li>
      <li>система из трёх микрофонов студийного уровня;</li>
      <li>акустическая система из шести динамиков с поддержкой Dolby Atmos;</li>
      <li>внешний адаптер питания мощностью 143 Вт, который крепится на магните и имеет оплетку кабеля в тон моноблоку;</li>
      <li>тонкий корпус: толщиной 11,5 мм, два тихих вентилятора;</li>
      <li>размеры: ширина 54,7 см, высота 46,1 см, подставка 14,7 см;</li>
      <li>вес: 4,5 кг.</li>
    </ul>
    <div class="return"><router-link to="/userPage" class="return">Страница автора</router-link></div>
    <div class="return"><router-link to="/" class="return">Главная</router-link></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'news1',
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
      show: 'SHOW1'
    }),
    fava () {
      if (this.show === true) {
        return 'Нельзя добавить свою запись'
      } return ''
    }
  }
}
</script>

<style scoped>

</style>
