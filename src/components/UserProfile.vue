<template>
    <div>
        Logged in as {{ user.uid }}

        <button @click="auth.signOut()">Sign Out</button>
    </div>
</template>

<script>
import { auth } from '../firebase';

export default {
  data() {
    return { 
          auth 
    }
  },
  props: ['user']
}
</script>
