<template>
  <div class="icon-wrap">
    <v-btn icon small @click="noticeClick()" class="mx-1"><v-icon color="white">mdi-bell</v-icon></v-btn>
    <v-btn icon small @click="cartClick()" class="mx-1"><v-icon color="white">mdi-shopping</v-icon></v-btn>
  </div>
</template>

<script>
export default {
  name: "iconBar",
  methods: {
    noticeClick() {
      alert('알림 기능 준비중입니다.');
    },
    cartClick() {
      alert('장바구니 기능 준비중입니다.');
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
