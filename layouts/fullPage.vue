<template>
  <v-app light>
    <v-app-bar
      class="pa-0"
      color="white"
      flat
      fixed
      app
    >
      <div class="arrow-wrap" @click="back()">
        <v-icon>mdi-chevron-left</v-icon>
      </div>
      <AppSubject :subject="subject" :isColor="isColor"/>
    </v-app-bar>

    <v-main>
      <v-container class="pb-16 h-100">
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppSubject from "@/components/topBar/appSubject";
export default {
  name: "fullPage",
  components: {
    AppSubject
  },
  data() {
    return {
      subject: '신제품 몰아보기',
      isColor: true
    }
  },
  methods: {
    back() {
      history.back();
    }
  }
}
</script>

<style scoped>
::v-deep .subject-wrap {
  margin: 0 auto;
}
</style>
