<template>
<v-container>
  <v-form>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="description" label="Description"></v-text-field>
    <v-select v-model="category" label="Category" :items="items" ></v-select>
    <v-text-field v-model="price" label="Price"></v-text-field>
    <v-text-field v-model="stock" label="Stock"></v-text-field>
    <input type="file" id="image">
  </v-form>
  <button type="button" class="btn btn-success elevation-9" @click="additem">Add Item</button>
</v-container>
</template>

<script>
// const $http = 'http://localhost:3000/'
// const $http = 'http://35.198.207.92:3000/'
const $http = 'http://18.220.255.72/' //aws

import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      description: '',
      category: '',
      price: '',
      stock: '',
      items: [
        {text: 'pepakuro'},
        {text: 'replika'},
        {text: 'automata'}
      ]

    }
  },

  methods: {
    additem () {
      let fileInput = document.querySelector('#image');

      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('category', this.category)
      formData.append('price', this.price)
      formData.append('stock', this.stock)
      formData.append('image', fileInput.files[0])

      let url = $http + 'users/upload'

      axios
        .post(url, formData)
        .then(response => {
          console.log('berhasil:',response)
        })
        .catch(error => {
          console.log('ini kenapa ya????',error)
        })
    }
  }
}
</script>
