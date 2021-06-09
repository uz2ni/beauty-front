<template>
  <v-row class="d-flex flex-column">
    <v-col class="col-12 text-center">
      <div class="auth-title">BEAUTY</div>
    </v-col>
    <v-col class="col-12 text-center">
      <!-- join button -->
      <div class="d-flex flex-column align-center">
        <v-btn
          class="ma-2 px-16"
          rounded
          color="white"
        >
          이메일로 가입하기
        </v-btn>
        <v-btn
          class="ma-2 px-16"
          rounded
          color="yellow"
        >
          카카오로 가입하기
        </v-btn>
      </div>
      <!-- login URL -->
      <div class="d-flex justify-center mt-4 font-white login-wrap">
        <span class="mr-2 login-info">이미 가입하셨나요?</span>
        <NuxtLink to="/auth/login">로그인</NuxtLink>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "index",
  layout: 'auth'
}
</script>

<style scoped>
.auth-title {
  color: white;
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
  font-family: "Roboto", sans-serif;
}
.font-white {
  color: white;
}
.login-wrap * {
  font-size: 0.9rem;
}
</style>
