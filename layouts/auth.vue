<template>
  <v-app light class="bg-color">
    <v-main>
      <v-container class="h-100">
        <nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: "init.vue",
  data() {
   return {
     clipped: false,
     fixed: false,
     title: 'BEAUTY'
   }
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
.bg-color {
  background-color: #0d47a1;
}
</style>
