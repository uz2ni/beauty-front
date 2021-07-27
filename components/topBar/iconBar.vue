<template>
  <div class="icon-wrap">
    <v-btn v-if="options.isSearch" icon small @click="updateRoute('common/search')" class="mx-1"><v-icon color="white">mdi-search-web</v-icon></v-btn>
    <v-btn v-if="options.isNotice" icon small @click="noticeClick()" class="mx-1"><v-icon color="white">mdi-bell</v-icon></v-btn>
    <v-btn v-if="options.isShop" icon small @click="cartClick()" class="mx-1"><v-icon color="white">mdi-shopping</v-icon></v-btn>
  </div>
</template>

<script>
export default {
  name: "iconBar",
  props: {
    options: Object
  },
  methods: {
    noticeClick() {
      alert('알림 기능 준비중입니다.');
    },
    cartClick() {
      alert('장바구니 기능 준비중입니다.');
    },
    updateRoute(path) {
      this.$router.push({ path: `/${path}`, query:{subject: '검색하기'}, props:true })
    }
  }
}
</script>

<style scoped>
.icon-wrap {
  display: flex;
  align-items: center;
}
</style>
