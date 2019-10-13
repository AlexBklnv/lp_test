<template>
  <div id="app">
    <div class="container">
      <DialogsList/>
      <RouterView />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {
      DialogsList: () => import('./components/DialogsList.vue'),
    }
  }
</script>

<style scoped>
</style>
