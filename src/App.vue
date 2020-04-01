<template>
  <div id="app">
    <header>
      <h1>Vue Voxer</h1>
      <p>Realtime Walkie-Talkie Voice Chat</p>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
header {
  text-align: center;
}
button, input {
  margin-bottom: 10px;
}
</style>
