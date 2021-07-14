<template>
  <div>
    <v-row>
      <v-carousel
        cycle
        height="25vh"
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(banner, i) in banners"
          :key="i"
          :src="banner.src"
          :href="banner.landingUrl"
        >
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <v-row class="pa-2">
      <v-col
        v-for="(product, index) in products"
        :key="product.id"
        cols="6"
        :class="cardPadding(index)"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          >
          <v-img
            :src="imgUrlSetting(index)"
            class="white--text align-end"
            height="200px"
          >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="updateLike(product.id)">
                <v-icon :color="likeColor(product.id)">{{ likeToggle(product.id) }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-img>
        </v-card>
        <!-- product info -->
        <div class="prd-info-wrap">
          <div class="prd-shopnm">{{ product.shopName }}</div>
          <div class="prd-title">{{ product.title }}</div>
          <div class="prd-price">{{ product.price | comma }}</div>
        </div>

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
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
      likeProduct: [1,2], // product id
      products: [
        {
          "id": 1,
          "title": "그린 마일드 업 선 플러스 50ml",
          "price": 21000,
          "landingUrl": "https://www.dr-g.co.kr/shop/goods/goods_view.php?goodsno=3797&category=014007",
          "shopName" : "닥터지"
        },
        {
          "id": 2,
          "title": "노세범 미네랄 파우더 + 노세범 픽싱 피니시 파우더 5g",
          "price": 15400,
          "landingUrl": "https://www.innisfree.com/kr/ko/ProductView.do?prdSeq=29996&catCd01=&catCd02=&tp=",
          "shopName" : "이니스프리"
        },
        {
          "id": 3,
          "title": "모레모 헤어 트리트먼트 미라클 2X 480ML 대용량",
          "price": 27300,
          "landingUrl": "https://moremofam.co.kr/product/%EB%AA%A8%EB%A0%88%EB%AA%A8-%ED%97%A4%EC%96%B4-%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8-%EB%AF%B8%EB%9D%BC%ED%81%B4-2x-%EB%9F%AC%EB%B8%8C-%EC%97%90%EB%94%94%EC%85%98-480ml-%EB%8C%80%EC%9A%A9%EB%9F%89/80/category/24/display/1/",
          "shopName" : "모레모"
        },
        {
          "id": 4,
          "title": "그린 마일드 업 선 플러스 50ml",
          "price": 21000,
          "landingUrl": "https://www.dr-g.co.kr/shop/goods/goods_view.php?goodsno=3797&category=014007",
          "shopName" : "닥터지"
        },
        {
          "id": 5,
          "title": "노세범 미네랄 파우더 + 노세범 픽싱 피니시 파우더 5g",
          "price": 15400,
          "landingUrl": "https://www.innisfree.com/kr/ko/ProductView.do?prdSeq=29996&catCd01=&catCd02=&tp=",
          "shopName" : "이니스프리"
        },
        {
          "id": 6,
          "title": "모레모 헤어 트리트먼트 미라클 2X 480ML 대용량",
          "price": 27300,
          "landingUrl": "https://moremofam.co.kr/product/%EB%AA%A8%EB%A0%88%EB%AA%A8-%ED%97%A4%EC%96%B4-%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8-%EB%AF%B8%EB%9D%BC%ED%81%B4-2x-%EB%9F%AC%EB%B8%8C-%EC%97%90%EB%94%94%EC%85%98-480ml-%EB%8C%80%EC%9A%A9%EB%9F%89/80/category/24/display/1/",
          "shopName" : "모레모"
        }
      ]
    }
  },
  computed: {
    cardPadding() {
      return (index) => {
        return (index%2 == 0) ? 'pr-2' : 'pl-2';
      }
    },
    likeColor() {
      return (id) => {
        const productId = this.likeProduct.find((value) => value == id);
        return (productId === undefined) ? 'white' : 'primary';
      }
    },
    likeToggle() {
      return (id) => {
        const productId = this.likeProduct.find((value) => value == id);
        return (productId === undefined) ? 'mdi-heart-outline' : 'mdi-heart';
      }
    }
  },
  filters:{
    comma(val){
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  methods: {
    imgUrlSetting (id) { // 배너 이미지 임시용
      return `/images/banner${id%3+1}.jpg`;
    },
    updateLike(id) {
      const productId = this.likeProduct.find((value) => value == id);
      if(productId === undefined) {
        this.likeProduct.push(id);
      }else {
        const idx = this.likeProduct.indexOf(productId);
        if (idx > -1) this.likeProduct.splice(idx, 1);
      }
    }
  }
}
</script>
<style scoped>
.prd-info-wrap {
  /*border: 1px solid black;*/
  font-size:0.7rem;
  padding-top: 10px;
}
.prd-shopnm {
  font-weight: bold;
  color: #616161;
}
.prd-price {
  font-weight: bold;
  color: black;
  font-size:0.8rem;
}
/* slide banner custom */
::v-deep .v-carousel__controls > div > button{
  margin: 0;
  width: 17px;
  height: 17px;
}
::v-deep .v-carousel__controls > div > button > span > i {
  font-size: 10px !important;
}


</style>
