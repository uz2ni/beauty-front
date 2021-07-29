<template>
  <div>
    <MessageStack :stackInfo="stackInfo"/>
    <RowLine/>
    <v-row class="pl-4 pt-4"><h4 class="stack-title">내 취향 브랜드와 비슷한 신제품 💄</h4></v-row>
    <CardList :products="productList" :options="options"/>
  </div>
</template>

<script>
import MessageStack from "@/components/grid/messageStack";
import RowLine from "@/components/grid/rowLine";
import CardList from "@/components/grid/cardList";
import { mapGetters } from "vuex";
export default {
  components: {
    CardList,
    MessageStack,
    RowLine
  },
  computed: {
    ...mapGetters({
      productList: 'product/getProductAll'
    })
  },
  data() {
    return {
      stackInfo: {
        title: "신제품 몰아보기 👀",
        subTitle: "즐겨찾기한 브랜드의 신제품을 확인하세요",
        routePath: "/nav1/new",
        routePageTitle: "신제품 몰아보기"
      },
      options: {
        scrollDirection: "VERTICAL"
      }
    }
  }
}
</script>
<style scoped>
.stack-title {
  color: #616161;
}
</style>
