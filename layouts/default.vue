<template>
  <v-app light>
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
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-toolbar-title v-text="title" class="text-center" style="color: white;"/>
          </v-col>
        </v-row>
      </v-container>

      <template v-slot:extension>
        <v-tabs
          class="tab-menu"
          fixed-tabs
          centered
          slider-color="white"
          v-model="nowTabs.id"
        >
          <v-tab v-for="tab in nowTabs" :key="tab.id" @click="updateRoute(tab)" class="white--text">{{ tab.name }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>


    <v-main>
      <v-container class="pb-16 h-100">
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
      v-model="gnbValue"
      color="blue darken-4"
    >
      <v-btn v-for="nav in gnb" :key="nav.id" class="bottom-btn" @click="updateRoute(nav)">
        <span>{{ nav.name }}</span>
        <v-icon>{{ nav.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      fixed: false,
      title: 'BEAUTY',
      gnbValue: 0,
      /* gnb */
      gnb: [
        {
          id: 1,
          name: '홈',
          icon: 'mdi-home',
          route: 'nav1/tab1',
          tabs: [
            {
              id: 11,
              name: '브랜드 소개',
              route: 'nav1/tab1'
            },
            {
              id: 12,
              name: '행사',
              route: 'nav1/tab2'
            },
            {
              id: 13,
              name: '샵',
              route: 'nav1/tab3'
            }
          ]
        },
        {
          id: 2,
          name: '스토어',
          icon: 'mdi-store',
          route: 'tab1'
        },
        {
          id: 3,
          name: '포스트',
          icon: 'mdi-text-box-outline',
          route: 'tab1'
        },
        {
          id: 4,
          name: '구독',
          icon: 'mdi-heart',
          route: 'nav2/tab1',
          tabs: [
            {
              id: 41,
              name: '내 브랜드',
              route: 'nav2/tab1'
            },
            {
              id: 42,
              name: '찜한 상품',
              route: 'nav2/tab2'
            }
          ]
        },
        {
          id: 5,
          name: 'MY',
          icon: 'mdi-account-box',
          route: 'tab1'
        }
      ]
    }
  },
  computed: {
    nowTabs: function() {
      return this.gnb.find((value, index) => this.gnbValue == index).tabs;
    }
  },
  methods: {
    updateRoute(nav) {
      nav.nowTabId =
      this.$router.push({ path: `/${nav.route}` })
    }
  }
}
</script>
<style scoped>
.h-100 {
  height: 100%;
}
.bottom-btn {
  background-color: transparent !important;
  border-radius: 0;
  box-shadow: none;
  flex: 0 1 auto;
  font-size: 0.75rem;
  height: inherit !important;
  max-width: 168px;
  min-width: 80px !important;
  position: relative;
  text-transform: none;
  /*color: rgba(0, 0, 0, 0.6) !important;*/
}
</style>
