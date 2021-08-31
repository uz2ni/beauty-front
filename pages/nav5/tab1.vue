<template>
  <div>
    <div class="mb-4">
      <v-card-title>
        <v-avatar size="56">
          <img
            alt="user"
            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          >
        </v-avatar>
        <div class="profile-info">
          <div class="profile-nickname">유지니</div>
          <div class="profile-id">@uz2ni__</div>
        </div>
        <div class="follow-wrap">
          <v-btn
            rounded
            color="primary"
          >
            팔로우
          </v-btn>
<!--          <v-btn-->
<!--            rounded-->
<!--            color="secondary"-->
<!--          >-->
<!--            팔로잉-->
<!--          </v-btn>-->
          <v-btn
            class="mx-2"
            fab
            small
            color="grey lighten-5"
            elevation="2"
          >
            <v-icon color="gray">
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <div>유자로운 이야기 ^=^</div>
      </v-card-text>
    </div>
    <v-row class="my-0"><v-divider/></v-row>
    <v-row class="my-0 profile-summary">
      <v-col cols="4" class="p-0">
        <div>게시물</div>
        <div>100</div>
      </v-col>
      <v-col cols="4" class="p-0">
        <div>팔로워</div>
        <div>30K</div>
      </v-col>
      <v-col cols="4" class="p-0">
        <div>팔로우</div>
        <div>10K</div>
      </v-col>
    </v-row>
    <v-row class="my-0"><v-divider/></v-row>
    <v-row class="my-0 pa-0">
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner1.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner2.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner3.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner1.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner2.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner3.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner1.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner2.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner3.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner1.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner2.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
      <v-col
        cols="4"
        class="pa-0"
      >
        <v-card
          elevation="0"
          class="mx-auto"
          max-width="344"
          tile
          to="/"
        >
          <v-img
            src="/images/banner3.jpg"
            class="white--text align-end"
            height="130px"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "tab1.vue"
}
</script>

<style scoped>
.profile-nickname {
  font-size: 1.5rem;
}
.profile-id {
  font-size: 0.9rem;
  font-weight: initial;
}
::v-deep .v-card__title {
  line-height: 1.5rem;
  padding: 0;
}
.profile-info {
  margin-left: 10px;
}
.follow-wrap {
  position: absolute;
  right: 15px;
}
::v-deep .v-card__text {
  padding: 10px 5px;
  font-size: 0.9rem;
  line-height: 0.9rem;
}
.profile-summary {
  text-align: center;
  font-size: 0.9rem;
}
.profile-summary > div > div:nth-child(1) {
  color: #8e8e8e;
}
.profile-summary > div > div:nth-child(2) {
  color: #262626;
  font-weight: 500;
}
</style>
