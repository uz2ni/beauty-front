<template>
  <div>
    <buttonFilter :tags="tagList" :isMultiple="true" class="mt-1"/>
    <StackList :items="shopAllList"/>
  </div>
</template>

<script>
import ButtonFilter from "@/components/utils/buttonFilter";
import StackList from "@/components/grid/stackList";
import { mapGetters } from 'vuex';
export default {
  components: {
    ButtonFilter,
    StackList
  },
  data() {
    return {
      tagList: [
        '전체',
        '스킨케어',
        '썬케어',
        '메이크업',
        '립',
        '크림'
      ]
    }
  },
  computed: {
    ...mapGetters({
      shopAllList: 'shop/getShopAll',
      shopLikeList: 'shop/getLikeShops'
    })
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
