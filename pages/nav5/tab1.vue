<template>
  <div>
    <div>
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
        </div>
      </v-card-title>
    </div>
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
  font-size: 0.8rem;
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
</style>
