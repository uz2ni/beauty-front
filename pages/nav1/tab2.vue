<template>
  <div>
    <ListFilter/>
    <ButtonFilter :tags="tagList" :isMultiple="false"/>
    <CardList :products="productList"/>
  </div>
</template>
<script>
import ListFilter from "@/components/utils/listFilter";
import ButtonFilter from "@/components/utils/buttonFilter";
import CardList from "@/components/grid/cardList";
import { mapGetters } from "vuex";
export default {
  components: {
    ListFilter,
    ButtonFilter,
    CardList
  },
  data() {
    return {
      tagList: [
        '전체',
        '10대',
        '20대',
        '30대',
        '40대',
        '50대'
      ]
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
