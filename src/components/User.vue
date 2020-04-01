<template>
  <div>
    <slot name="user" :user="user"></slot>
  </div>
</template>

<script>
import { auth } from '../firebase';
import { ref } from '@vue/composition-api';

export default {
  setup() {

    const user = ref(null);
    const unsubscribe = auth.onAuthStateChanged(
        
                            firebaseUser =>  user.value = firebaseUser
                        );
    return {
      user,
      unsubscribe,
    }
  },

  destroyed() {
    this.unsubscribe()
  }
}
</script>