<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark>
                <v-toolbar-title>SignUp form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="face" v-model="username" label="Username " type="text"></v-text-field>
                  <v-text-field prepend-icon="person" v-model="email" label="E-mail " type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signup">Signup</v-btn> 
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import swal from 'sweetalert'
  import axios from 'axios'

  const vhttp='http://localhost:3000'

  export default {
    data: function (){
      return {
        username:'',
        email:'',
        password:''
      }  
    },

    methods: {
      valSignup: function () {
        let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let cekEmail = regEx.test(String(this.email).toLowerCase())
        let cekPass = this.password.match(/[0-9]/g)
        
        if (this.username === '') {
          swal({
            icon: 'error',
            title: 'Oops',
            text: 'Email must be filled'
          })
          return false
        } else if (this.email === '') {
          swal({
            icon: 'error',
            title: 'Oops',
            text: 'Email must be filled'
          })
          return false
        } else if (!cekEmail) {
          swal({
            icon: 'error',
            title: 'Oops',
            text: 'Email format is Wrong'
          })
          return false
        } else if (this.password === '') {
          swal({
            icon: 'error',
            title: 'Oops',
            text: 'Password must be filled'
          })
          return false
        } else if (this.password.length < 5) {
          swal({
            icon: 'error',
            title: 'Oops',
            text: 'Password minimal 5 digit'
          })
          return false
        } else if (!cekPass) {
          swal({
            icon: 'error',
            title: 'Oops',
            text: 'Password must contained Number'
          })
          return false
        } else {
          return true
        }
      },

    signup: function () {
      let cek = this.valSignup()
      let url = `${vhttp}users/signup`

      if (cek) {
        let newUser = {
          username: this.username,
          email: this.email,
          password: this.password,
        }
        axios
          .post(url, newUser)
          .then(response => {
            swal('Sign Up', 'you sign up successfully, please log in', 'success')
            this.$router.push('/login')
          })
          .catch(error => {
            console.error(error)
            swal({
              icon: 'error',
              title: 'Oops...',
              text: 'Email is not available!'
            })
          })
      }
    }

    }
  }
</script>