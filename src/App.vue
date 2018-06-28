<template>
  <v-app>
    
    <v-toolbar dark fixed>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/">
          <img src="https://storage.googleapis.com/happygram/craftlogo.png" alt="logo" style="height:60px">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge left><span slot="badge">{{cart.length}}</span></v-badge>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title">
          <v-btn @click="goto(item.to)">
            <v-icon left>{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-navigation-drawer v-model="sideNav" temporary dark absolute>
      <v-list v-for="item in menuItems" :key="item.title">
        <v-list-tile>
          <v-list-tile-action><v-icon >{{item.icon}}</v-icon></v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- =============================content============================== -->    
    <main>
      <router-view></router-view>
    </main>

    <!-- =============================footer============================== -->
    <v-footer height="auto" dark>
      <v-card flat tile class="text-xs-center" width=100%>
          <v-card-text class="white--text">
              Get connect with us on social network
          </v-card-text>
          <v-card-action v-for="icon in icons" :key="icon" >
              <v-btn :href=icon.iconUrl flat>
                  <v-icon>{{ icon.fab }}</v-icon>
              </v-btn>
          </v-card-action>
          <v-card-text>
              &copy;2018 — <strong>Vuetify</strong>
          </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    
    data () {
      return {
        sideNav: false,
        menuItems: [
          { icon: 'shopping_cart', title: 'Cart', to: '/cart'},
          { icon: 'face', title: 'Sign up', to: '/signup'},
          { icon: 'lock_open', title: 'Sign in', to: '/login'},
        ],
        icons: [
          {fab:'fab fa-facebook', iconUrl:'https://web.facebook.com/yasirmaulana'},
          {fab:'fab fa-instagram', iconUrl:'https://www.instagram.com/yasirmaulana/'},
          {fab:'fab fa-github', iconUrl:'https://github.com/yasirmaulana'},
          {fab:'fab fa-medium', iconUrl:'https://medium.com/@yasir.maulana'}
        ]
      }
    },
    methods: {
      goto: function (to) {
        this.$router.push(to)
      }
    },

    computed: {
      ...mapState([
        'cart'
      ])
    },
  }
</script>
