<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(banner, index) in banners"
        :key="index"
        :cols="12"
      >
        <a :href="banner.landingUrl"><v-card class="my-1">
          <v-img
            :src="imgUrlSetting(index)"
            class="white--text align-center"
            height="100px"
          >
<!--            <v-card-title class="card-tit font-weight-bold">[{{ banner.shop.shopName }}] {{banner.title}}</v-card-title>-->
<!--            <v-card-subtitle class="font-weight-bold pt-1">{{ banner.price }}원</v-card-subtitle>-->
          </v-img>
        </v-card></a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  /*
  async asyncData ({ app, params }) {
    const { data } = await app.$axios.$get('price-banner')
    return { banners: data.priceBanners }
  },*/
  data() {
    return {
      banners: [
        {
          "title": "그린 마일드 업 선 플러스 50ml",
          "price": 21000,
          "landingUrl": "https://www.dr-g.co.kr/shop/goods/goods_view.php?goodsno=3797&category=014007"
        },
        {
          "title": "노세범 미네랄 파우더 + 노세범 픽싱 피니시 파우더 5g",
          "price": 15400,
          "landingUrl": "https://www.innisfree.com/kr/ko/ProductView.do?prdSeq=29996&catCd01=&catCd02=&tp="
        },
        {
          "title": "모레모 헤어 트리트먼트 미라클 2X 480ML 대용량",
          "price": 27300,
          "landingUrl": "https://moremofam.co.kr/product/%EB%AA%A8%EB%A0%88%EB%AA%A8-%ED%97%A4%EC%96%B4-%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8-%EB%AF%B8%EB%9D%BC%ED%81%B4-2x-%EB%9F%AC%EB%B8%8C-%EC%97%90%EB%94%94%EC%85%98-480ml-%EB%8C%80%EC%9A%A9%EB%9F%89/80/category/24/display/1/"
        },
        {
          "title": "그린 마일드 업 선 플러스 50ml",
          "price": 21000,
          "landingUrl": "https://www.dr-g.co.kr/shop/goods/goods_view.php?goodsno=3797&category=014007"
        },
        {
          "title": "노세범 미네랄 파우더 + 노세범 픽싱 피니시 파우더 5g",
          "price": 15400,
          "landingUrl": "https://www.innisfree.com/kr/ko/ProductView.do?prdSeq=29996&catCd01=&catCd02=&tp="
        },
        {
          "title": "모레모 헤어 트리트먼트 미라클 2X 480ML 대용량",
          "price": 27300,
          "landingUrl": "https://moremofam.co.kr/product/%EB%AA%A8%EB%A0%88%EB%AA%A8-%ED%97%A4%EC%96%B4-%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8-%EB%AF%B8%EB%9D%BC%ED%81%B4-2x-%EB%9F%AC%EB%B8%8C-%EC%97%90%EB%94%94%EC%85%98-480ml-%EB%8C%80%EC%9A%A9%EB%9F%89/80/category/24/display/1/"
        }
      ]
    }
  },
  created() {
    this.sortLowPrice();
  },
  methods: {
    imgUrlSetting (id) { // 배너 이미지 임시용
      return `/images/price-banner-0${id%3+1}.png`;
    },
    sortLowPrice() { // 내림차순 정렬
      this.banners.sort(function(first, second) {
        return first.price - second.price;
      });
    }
  }
}
</script>
<style scoped>
.card-tit {
  font-size: 0.9rem;
  line-height: 1rem;
}
</style>
