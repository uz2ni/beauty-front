<template>
  <v-app light>
    <v-app-bar
      class="pa-0"
      color="blue darken-4"
      :clipped-left="clipped"
      fixed
      app
    >
      <TopBar :options="pageOptions"/>

      <template v-slot:extension v-if="nowTabs.length > 0">
        <v-tabs
          class="tab-menu px-0"
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
import TopBar from "@/components/topBar";
export default {
  name: "default",
  components: {
    TopBar
  },
  data () {
    return {
      clipped: false,
      fixed: false,
      gnbValue: 0,
      /* gnb */
      gnb: [
        {
          id: 1,
          name: '제품별',
          icon: 'mdi-shape',
          route:'nav1/tab1',
          pageName: '제품 목록',
          isSearchBar: false,
          isSearch: true,
          isShop: true,
          isNotice: true,
          tabs: [
            {
              id: 11,
              name: '전체',
              route: 'nav1/tab1'
            },
            {
              id: 12,
              name: '베스트',
              route: 'nav1/tab2'
            },
            {
              id: 13,
              name: '신제품',
              route: 'nav1/tab3'
            }
          ]
        },
        {
          id: 2,
          name: '브랜드별',
          icon: 'mdi-store',
          route: 'nav2/tab1',
          pageName: '브랜드 목록',
          isSearchBar: false,
          isSearch: true,
          isShop: true,
          isNotice: true,
          tabs: []
        },
        {
          id: 3,
          name: '홈',
          icon: 'mdi-home',
          route: 'nav3/tab1',
          pageName: 'BEAUTY',
          isSearchBar: true,
          isSearch: false,
          isShop: true,
          isNotice: true,
          tabs: [
            {
              id: 31,
              name: '행사',
              route: 'nav3/tab1'
            },
            {
              id: 32,
              name: '샵',
              route: 'nav3/tab2'
            },
            {
              id: 33,
              name: '라이브 방송',
              route: 'nav3/tab3'
            }
          ]
        },
        {
          id: 4,
          name: '구독',
          icon: 'mdi-heart',
          route: 'nav4/tab1',
          pageName: '구독 목록',
          isSearchBar: false,
          isSearch: true,
          isShop: true,
          isNotice: true,
          tabs: [
            {
              id: 41,
              name: '구독 소식',
              route: 'nav4/tab1'
            },
            {
              id: 42,
              name: '구독 브랜드',
              route: 'nav4/tab2'
            },
            {
              id: 43,
              name: '찜 상품',
              route: 'nav4/tab3'
            }
          ]
        },
        {
          id: 5,
          name: 'MY',
          icon: 'mdi-account-box',
          route: 'nav5/tab1',
          pageName: '마이페이지',
          isSearchBar: false,
          isSearch: true,
          isShop: true,
          isNotice: true,
          tabs: []
        }
      ]
    }
  },
  computed: {
    pageName: function() {
      return this.gnb.find((value, index) => this.gnbValue == index).pageName;
    },
    nowTabs: function() {
      return this.gnb.find((value, index) => this.gnbValue == index).tabs;
    },
    pageOptions: function () {
      const page = this.gnb.find((value, index) => this.gnbValue == index);
      const options = {
        "pageName": page.pageName,
        "isSearchBar": page.isSearchBar,
        "isSearch": page.isSearch,
        "isShop": page.isShop,
        "isNotice": page.isNotice
      };
      return options;
    }
  },
  methods: {
    updateRoute(nav) {
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
::v-deep .v-toolbar__content {
  padding: 4px;
}
</style>
