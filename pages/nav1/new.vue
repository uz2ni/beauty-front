<template>
  <div>
    <template v-for="shop in newProductsByLikeShops">
      <h4 class="mt-5">{{ shop.shopName }}</h4>
      <CardList :products="shop.products"/><RowLine/>
    </template>
  </div>
</template>

<script>
import CardList from "@/components/grid/cardList";
import RowLine from "@/components/grid/rowLine";
export default {
  name: "new",
  layout: 'fullPage',
  components: {RowLine, CardList},
  data() {
    return {
      newProductsByLikeShops: [
        {
          shopId: 1,
          shopName: "닥터지",
          products: [
            {
              "id": 1,
              "title": "그린 마일드 업 선 플러스 50ml",
              "price": 21000,
              "landingUrl": "https://www.dr-g.co.kr/shop/goods/goods_view.php?goodsno=3797&category=014007",
              "like": false
            },
            {
              "id": 2,
              "title": "그린 마일드 업 선 플러스 50ml_2",
              "price": 15400,
              "landingUrl": "https://www.innisfree.com/kr/ko/ProductView.do?prdSeq=29996&catCd01=&catCd02=&tp=",
              "like": true
            },
            {
              "id": 3,
              "title": "그린 마일드 업 선 플러스 50ml_3",
              "price": 27300,
              "landingUrl": "https://moremofam.co.kr/product/%EB%AA%A8%EB%A0%88%EB%AA%A8-%ED%97%A4%EC%96%B4-%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8-%EB%AF%B8%EB%9D%BC%ED%81%B4-2x-%EB%9F%AC%EB%B8%8C-%EC%97%90%EB%94%94%EC%85%98-480ml-%EB%8C%80%EC%9A%A9%EB%9F%89/80/category/24/display/1/",
              "like": false
            }
          ]
        },
        {
          shopId: 2,
          shopName: "이니스프리",
          products: [
            {
              "id": 1,
              "title": "노세범 미네랄 파우더 + 노세범 픽싱 피니시 파우더 5g",
              "price": 21000,
              "landingUrl": "https://www.dr-g.co.kr/shop/goods/goods_view.php?goodsno=3797&category=014007",
              "like": false
            },
            {
              "id": 2,
              "title": "노세범 미네랄 파우더 + 노세범 픽싱 피니시 파우더 5g_2",
              "price": 15400,
              "landingUrl": "https://www.innisfree.com/kr/ko/ProductView.do?prdSeq=29996&catCd01=&catCd02=&tp=",
              "like": true
            },
            {
              "id": 3,
              "title": "노세범 미네랄 파우더 + 노세범 픽싱 피니시 파우더 5g_3",
              "price": 27300,
              "landingUrl": "https://moremofam.co.kr/product/%EB%AA%A8%EB%A0%88%EB%AA%A8-%ED%97%A4%EC%96%B4-%ED%8A%B8%EB%A6%AC%ED%8A%B8%EB%A8%BC%ED%8A%B8-%EB%AF%B8%EB%9D%BC%ED%81%B4-2x-%EB%9F%AC%EB%B8%8C-%EC%97%90%EB%94%94%EC%85%98-480ml-%EB%8C%80%EC%9A%A9%EB%9F%89/80/category/24/display/1/",
              "like": false
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
