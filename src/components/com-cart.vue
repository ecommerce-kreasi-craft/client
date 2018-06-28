<template>
  <v-container>
    <!-- <v-data-table :headers="headers" :items="desserts" class="elevation-1" style="margin:60px">
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <span slot="activator">
            {{ props.header.text }}
          </span>
          <span>
            {{ props.header.text }}
          </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table> -->

    <h1  style="margin-top:60px">Shopping Cart</h1>
    <!-- {{cart}} -->
    <table class="table table-striped table-hover table-bordered">
      <tbody>
          <tr>
            <th align="left">Item</th>
            <th align="right">QTY</th>
            <th align="right">Unit Price</th>
            <th align="right">Total Price</th>
          </tr>
          <tr v-for="(item, index) in cart" v-bind:key="index">
            <td>{{item.name}}</td>
            <td align="right">{{item.quantity}}</td>
            <td align="right">{{item.price | currency}}</td>
            <td align="right">{{item.quantity * item.price | currency}}</td>
          </tr>
          <!-- <tr>
            <th colspan="3"><span class="pull-right">Sub Total</span></th>
            <th>{{subTotCart}}</th>
          </tr> -->
          <!-- <tr>
            <th colspan="3"><span class="pull-right">Kurir</span></th>
            <th> 0</th>
          </tr> -->
          <tr>
            <th colspan="3" align="right"><span class="pull-right">Total</span></th>
            <th>?</th>
          </tr>
          <tr>
            <th>
              <v-btn to="/" color="primary">Continue Shopping</v-btn>
            </th>
            <th></th>
            <th></th>
              <v-btn color="primary">Checkout</v-btn>
            <th></th>
          </tr>
      </tbody>
    </table>
  </v-container>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'cart'
    ])
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
}
</script>
