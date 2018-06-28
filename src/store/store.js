import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const $http = 'http://localhost:3000/'
// const $http = 'http://35.198.207.92:3000/'
const $http = 'http://18.220.255.72/' //aws

export default new Vuex.Store({
  state: {
    cart: [], 
    card: null
  },
  
  mutations: {
    buyItem: function (state, payload) {
      state.cart.push(payload)
    },

    getProduct: function (state, payload) {
      state.card = payload
    }
  },
  
  actions: {
    buyItem: function ({commit}, payload) {
      commit('buyItem', payload)
    },

    getProduct: function ({commit}) {
      let url = $http + 'products'
      axios
        .get(url)
        .then(response => {
          let products = response.data
          commit('getProduct', products)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})