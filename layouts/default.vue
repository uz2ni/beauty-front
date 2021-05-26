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
        </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
          to: '/inspire2'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'EVENT',
          to: '/inspire3'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BEAUTY'
    }
  }
}
</script>
