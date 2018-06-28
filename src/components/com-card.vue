<template> 
  <v-container grid-list-md text-xs-center>
    <!-- {{cart}} -->
    <v-text-field label="search product..." v-model="search"/>
    <v-layout row wrap>
      <v-flex v-for="item in filterProduct" :key="item">
        <v-card xs3 sm6 md4 style="margin:5px" class="elevation-9">
          <v-card-media :src="item.url" height="300px"></v-card-media>
            <div>
              <h3>{{item.name}}</h3>
              {{item.description}}
            </div>
          <v-card-actions>
            <div >{{item.price | currency}}</div>
            <v-spacer/>
            <div :class="{ few: item.stock < 10, none: item.stock == 0}">Stock: {{item.stock}}</div>
            <v-btn color="primary" @click="buy(item)" :disabled="item.stock == 0">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <!-- {{filterProduct}} -->
    </v-layout>
  </v-container>
</template>
 
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState([
      'card',
      'cart'
    ]),
    filterProduct:function () {
      let cards = this.$store.state.card
      // return cards
      return cards.data.filter((item) => {
        return item.name.toLowerCase().match(this.search)
      })
    }
  },
  
  filters: {
    currency: function(value) {
      var formatter = Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
      })
      return formatter.format(value)
    }
  },

  methods: {
    buy: function(item) {
      var cartItem = this.getCartItem(item)
      console.log('ini cartItem:',cartItem)

      if(cartItem != null) {
        cartItem.quantity++
      } else {
        let objItem = {
          id: item._id,
          name: item.name,
          price: item.price,
          quantity: 1
        }
        this.$store.dispatch('buyItem', objItem)
      }
      item.stock--
    },

    getCartItem: function(item) {
      console.log(this.cart.length)
      for(var i = 0; i < this.cart.length; i++) {
        console.log('cccccccccccccccc:',this.cart)
        if(this.cart[i]._id == item._id) {
          return this.cart[i]
        }
          return null
          console.log('null hahahahaha')
      }
      console.log('<<<<<<<<<<<<<<<<<<<<<<<<')
    }
  },

  created() {
    this.$store.dispatch('getProduct')
  }
}
</script>

<style scoped>
.few { color: rgb(243, 142, 10); }
.none { color: rgb(247, 4, 4); } 
</style>
