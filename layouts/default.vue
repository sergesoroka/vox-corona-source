<template>
  <div class="container">
    <TheHeader />
    <navBar />

    <main class="main-content">
      <Slogan />
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import Slogan from '@/components/Slogan/Slogan'
import NavBar from '@/components/NavBar/NavBar'
export default {
  components: { TheHeader, Slogan, NavBar }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Lato, sans-serif;
  background-color: #f9f9f9;
}
.main-content {
  width: 1172px;
  margin: 0 auto;
}
@media (max-width: 425px) {
  .main-content {
    width: 100%;
  }
}
</style>
