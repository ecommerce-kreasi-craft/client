<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav">

    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sieNav"></v-toolbar-side-icon>
      <router-link to="/">
        <img src="https://storage.googleapis.com/happygram/craftlogo.png" alt="logo" style="height:60px">
      </router-link>
      <v-spacer></v-spacer>
        <v-toolbar-items>
            <router-link to="/cart">
          <v-btn flat>
            <v-badge left>
              <span slot="badge">{{cart.items.length}}</span>
              <v-icon large color="grey lighten-1">shopping_cart</v-icon>
            </v-badge>
            <v-icon left>shopping_cart</v-icon>
            cart
          </v-btn>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
  </v-app>  
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function () {
    return {
      sideNav: false,
      
    }
  },
  computed: {
    ...mapState([
      'cart'
    ])
  }  
}
</script>
