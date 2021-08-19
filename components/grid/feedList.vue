<template>
  <div>
    <div class="feed-item">
      <v-row>
        <v-col cols="12" class="list-top d-flex">
          <v-avatar
            color="grey"
            size="35px"
          >
            <img
              alt="Avatar"
              src="/images/feed/feed-profile-01.jpg"
            >
          </v-avatar>
          <div class="list-top-info">
            <nuxt-link to=""><span>uz2ni__</span></nuxt-link>
            <span>제페토 어딘가</span>
          </div>
          <div class="list-top-icon">
            <v-icon>mdi-dots-horizontal</v-icon>
          </div>
        </v-col>
  <!--      <v-col cols="12">-->
  <!--        main-content-->
  <!--      </v-col>-->
  <!--      <v-col cols="12">-->
  <!--        sub-content-->
  <!--      </v-col>-->
      </v-row>
      <v-row>
        <v-col cols="12" class="list-cont">
          <v-card elevation="0" class="rounded-0">
            <v-img src="/images/feed/feed-01.jpg"/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="list-cont-icon">
          <div>
            <div><v-icon>mdi-heart-outline</v-icon></div>
            <div><v-icon>mdi-message-outline</v-icon></div>
            <div><v-icon>mdi-share</v-icon></div>
          </div>
          <div>
            <div><v-icon>mdi-bookmark-outline</v-icon></div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="list-text">
          <div class="list-text-wrap">
            <nuxt-link to=""><span>uz2ni__</span></nuxt-link>
            <span>주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용</span>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- 2 -->
    <div class="feed-item">
      <v-row>
        <v-col cols="12" class="list-top d-flex">
          <v-avatar
            color="grey"
            size="35px"
          >
            <img
              alt="Avatar"
              src="/images/feed/feed-profile-01.jpg"
            >
          </v-avatar>
          <div class="list-top-info">
            <nuxt-link to=""><span>uz2ni__</span></nuxt-link>
            <span>메타버스 속</span>
          </div>
          <div class="list-top-icon">
            <v-icon>mdi-dots-horizontal</v-icon>
          </div>
        </v-col>
        <!--      <v-col cols="12">-->
        <!--        main-content-->
        <!--      </v-col>-->
        <!--      <v-col cols="12">-->
        <!--        sub-content-->
        <!--      </v-col>-->
      </v-row>
      <v-row>
        <v-col cols="12" class="list-cont">
          <v-card elevation="0" class="rounded-0">
            <v-img src="/images/feed/feed-02.jpg"/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="list-cont-icon">
          <div>
            <div><v-icon>mdi-heart-outline</v-icon></div>
            <div><v-icon>mdi-message-outline</v-icon></div>
            <div><v-icon>mdi-share</v-icon></div>
          </div>
          <div>
            <div><v-icon>mdi-bookmark-outline</v-icon></div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="list-text">
          <div class="list-text-wrap">
            <nuxt-link to=""><span>uz2ni__</span></nuxt-link>
            <span>주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용주절주절내용</span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "feedList"
}
</script>

<style scoped>
.feed-item * {
  font-size: 0.75rem;
}
.feed-item {
  margin-bottom: 20px;
}
.list-top {
  align-items: center;
  padding: 7px;
}
.list-top-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.list-top-icon {
  position: absolute;
  right: 5px;
  padding: 5px;
}
.list-top-icon ::v-deep i {
  font-size: 1.2rem;
  color: #424242;
}
.list-cont {
  padding: 0;
}
.list-cont-icon {
  padding: 0 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.list-cont-icon * {
  font-size: 1.3rem;
  color: #424242;
}
.list-cont-icon > div {
  display: flex;
  align-items: center;
}
.list-cont-icon > div:nth-child(1) > div {
  padding: 5px;
}

</style>
