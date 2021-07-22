<template>
  <div>
    <MessageStack/>
    <RowLine/>
    <v-row class="pl-4 pt-4"><h4 class="stack-title">내 취향 브랜드와 비슷한 신제품 💄</h4></v-row>
    <CardList :products="productList"/>
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
  }
}
</script>
<style scoped>
.stack-title {
  color: #616161;
}
</style>
