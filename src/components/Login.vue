<template>
  <aside class="section">
    <h3>Sign in Anonymously</h3>
    <button class="button" @click="auth.signInAnonymously()">Sign In</button>

    <div v-if="newUser">
      <h3>Sign Up for a New Account</h3>
      <a href="#" @click="newUser = false">Returning User?</a>
    </div>

    <div v-else>
      <h3>Sign In with Email</h3>
      <a href="#" @click="newUser = true">New user?</a>
    </div>

      <label for="email">Email</label><br>
      <input v-model="email" placeholder="email" type="email" class="input">

      <label for="password">Password</label><br>
      <input v-model="password" type="password" class="input">

    <br>

    <button class="button is-info" :class="{ 'is-loading': loading }" @click="signInOrCreateUser()">
      {{ newUser ? 'Sign Up' : 'Login'}}
    </button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>

    </aside>   
</template>

<script>
import { auth } from '../firebase';


export default {
  data() {
    return {
      auth,
      newUser: false,
      email: '',
      password: '',
    }
  },

  methods: {
      async signInOrCreateUser() {

        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password)
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password)
        }

      }

  },
}

</script>

