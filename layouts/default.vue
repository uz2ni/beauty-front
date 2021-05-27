<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      class="pa-0"
      color="blue darken-4"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-container class="ma-0 pa-0">
        <v-row
          no-gutters
        >
          <v-col cols="4">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white"/>
          </v-col>

          <v-col cols="4" class="d-flex align-center justify-center">
            <v-toolbar-title v-text="title" class="text-center" style="color: white;"/>
          </v-col>

          <v-col cols="4">
          </v-col>
        </v-row>
      </v-container>

      <template v-slot:extension>
        <v-tabs
          class="tab-menu"
          fixed-tabs
          centered
          slider-color="white"
        >
          <v-tab href="/tab1" class="white--text">홈</v-tab>
          <v-tab href="/tab2" class="white--text">질문</v-tab>
          <v-tab href="/tab3" class="white--text">리뷰</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>


    <v-main>
      <v-container class="pb-16">
        <nuxt />
      </v-container>
    </v-main>
    <!--<v-footer
      app
      class="pb-16"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->

    <v-bottom-navigation
      fixed
      v-model="value"
      color="blue darken-4"
    >
      <v-btn>
        <span>홈</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span>이벤트</span>

        <v-icon>mdi-gift-outline</v-icon>
      </v-btn>

      <v-btn>
        <span>포스트</span>

        <v-icon>mdi-text-box-outline</v-icon>
      </v-btn>

      <v-btn>
        <span>스토어</span>

        <v-icon>mdi-store</v-icon>
      </v-btn>

      <v-btn>
        <span>MY</span>

        <v-icon>mdi-account-box</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '홈',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '체험단',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'NEW',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'EVENT',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BEAUTY',
      value: 1
    }
  }
}
</script>
<style scoped>
</style>
