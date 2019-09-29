<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/afee1cdb430cdefc03eb66cc6ff93d27.jpg_750x200_78de585b.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/249dfa53de67b8824a96f9821e58f30d.jpg_750x200_48bf24d9.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
// >>>穿透 不受scoped限制
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;

  .swiper-img {
    width: 100%;
  }
}
</style>