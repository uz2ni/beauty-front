<template>
  <v-row class="msg-stack-wrap">
    <router-link :to="{ path:stackInfo.routePath, query:{subject: stackInfo.routePageTitle}, props:true }" class="r-link" v-if="stackInfo.routePath!==''">
      <div class="msg-wrap">
        <h4>{{ stackInfo.title }}</h4>
        <p class="mb-0">{{ stackInfo.subTitle }}</p>
      </div>
      <div class="arrow-wrap" v-if="stackInfo.routePath!==''">
        <div>
          <v-icon>mdi-chevron-right</v-icon>
        </div>
      </div>
    </router-link>
  </v-row>
</template>

<script>
export default {
  name: "messageStack",
  props: {
    stackInfo: Object
  }
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
