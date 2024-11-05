<template>
  <div class="logo">
    <router-link :to="{ name: 'home' }">
      <h3>EVREN</h3>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  h3 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 31px;
    letter-spacing: 5px;
  }
}
</style>
