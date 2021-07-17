<template>
  <v-row class="msg-stack-wrap">
    <router-link to="./new" class="r-link">
      <div class="msg-wrap">
        <h4>신제품 몰아보기 👀</h4>
        <p class="mb-0">즐겨찾기한 브랜드의 신제품을 확인하세요</p>
      </div>
      <div class="arrow-wrap">
        <div>
          <v-icon>mdi-chevron-right</v-icon>
        </div>
      </div>
    </router-link>
  </v-row>
</template>

<script>
export default {
  name: "messageStack"
}
</script>

<style scoped>
.msg-stack-wrap {
  height: 10vh;
  justify-content: center;
}
/* link 속성 */
.msg-stack-wrap > .r-link {
  display: flex;
}
.r-link:link, .r-link:visited, .r-link:hover { color: #424242; text-decoration: none; cursor: none;}

.msg-stack-wrap > .r-link > div {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.msg-stack-wrap > .r-link > div > p {
  font-size: 0.75rem;
  color: #9e9e9e;
}
/* arrow */
.arrow-wrap > div{
  position: absolute;
  right: 10px;
}
</style>
