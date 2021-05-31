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
          v-model="selectedTab"
        >
          <v-tab v-for="tab in tabs" :key="tab.id" @click="updateRoute(tab.route)" class="white--text">{{ tab.name }}</v-tab>
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
      v-model="value"
      color="blue darken-4"
    >
      <v-btn v-for="nav in bottomNav" :key="nav.id">
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
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BEAUTY',
      value: 1,
      /* top-tab */
      selectedTab: 0,
      tabs: [
        {
          id: 1,
          name: 'NEW',
          route: 'tab1'
        },
        {
          id: 2,
          name: '체험단',
          route: 'tab2'
        },
        {
          id: 3,
          name: '콘텐츠',
          route: 'tab3'
        },
        {
          id: 4,
          name: 'SHOP',
          route: 'tab4'
        }
      ],
      /* bottom-navigation */
      bottomNav: [
        {
          id: 1,
          name: '홈',
          icon: 'mdi-home',
          route: 'tab1'
        },
        {
          id: 2,
          name: '이벤트',
          icon: 'mdi-gift-outline',
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
          name: '스토어',
          icon: 'mdi-store',
          route: 'tab1'
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
  mounted() {
    // Get current route name
    // Find the tab with the same route (property value)
    // Set that tab as 'selectedTab'
    const tabIndex = this.tabs.findIndex(tab => tab.route === this.$route.name)
    this.selectedTab = tabIndex
    console.log(tabIndex);
  },
  methods: {
    updateRoute (route) {
      this.$router.push({ path: route })
    }
  }
}
</script>
<style scoped>
.h-100 {
  height: 100%;
}
</style>
