<template>
  <div>
    <TopBanner :banners="bannerItems"/>
    <CardList :products="productList" :options="options"/>
  </div>
</template>

<script>
import CardList from "@/components/grid/cardList";
import TopBanner from "@/components/banners/topBanner";
import { mapGetters } from 'vuex';
export default {
  components: {
    CardList,
    TopBanner
  },
  data() {
    return {
      bannerItems: [
        {
          "id" : 1,
          "title" : "banner1",
          "src" :"/images/price-banner-01(375x203).png",
          "landingUrl": "https://www.dr-g.co.kr/shop/goods/goods_view.php?goodsno=3797&category=014007"
        },
        {
          "id" : 2,
          "title" : "banner2",
          "src" :"/images/price-banner-02(375x203).png",
          "landingUrl": "https://www.innisfree.com/kr/ko/ProductView.do?prdSeq=29996&catCd01=&catCd02=&tp="
        },{
          "id" : 3,
          "title" : "banner3",
          "src" :"/images/price-banner-03(375x203).png",
          "landingUrl": "https://moremofam.co.kr/product/%EB%AA%A8%EB%A0%88%EB%AA%A8-%ED%97%A4%EC%96%B4-%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8-%EB%AF%B8%EB%9D%BC%ED%81%B4-2x-%EB%9F%AC%EB%B8%8C-%EC%97%90%EB%94%94%EC%85%98-480ml-%EB%8C%80%EC%9A%A9%EB%9F%89/80/category/24/display/1/"
        }
      ],
      options: {
        scrollDirection: "VERTICAL"
      }
    }
  },
  computed: {
    ...mapGetters({
      productList: 'product/getProductAll'
    })
  }
}
</script>
<style scoped>
</style>
