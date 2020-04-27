<template>
  <nav class="main-nav">
    <ul class="nav-links">
      <!-- <div class="nav-link">
        <a href="/">Актуальне</a>
      </div>
      <div class="nav-link">
        <a href="/digests">Дайджести</a>
      </div>

      <div class="nav-link">
        <a href="/antifake">Антифейк</a>
      </div>

      <div class="nav-link">
        <a href="/monitor">Оперативний моніторинг</a>
      </div>-->

      <nuxt-link to="/" tag="li" class="nav-link">
        <a>Актуальне</a>
      </nuxt-link>
      <nuxt-link to="/digests" tag="li" class="nav-link">
        <a>Дайджести</a>
      </nuxt-link>
      <nuxt-link to="/antifake" tag="li" class="nav-link">
        <a>Антифейк</a>
      </nuxt-link>
      <nuxt-link to="/monitor" tag="li" class="nav-link nav-monitor">
        <a>Оперативний моніторинг</a>
      </nuxt-link>
    </ul>
  </nav>
</template>

<style scoped>
.main-nav {
  height: 100%;
  position: relative;
}
.nav-links {
  position: absolute;
  top: 124px;
  left: 16px;
  width: 140px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-link {
  height: 100%;
  margin: 0.5rem 0.5rem;
  padding: 0.3rem;
  text-transform: uppercase;
  font-weight: 700;
}
.nav-link.nuxt-link-exact-active {
  border-bottom: 3px solid #f8e830;
}
.nav-link a {
  display: block;
  text-decoration: none;
  color: rgb(74, 74, 74);
}
.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: #f7e414;
}
@media (max-width: 425px) {
.nav-monitor {
    display: none;
  }
}
@media (max-width: 1430px) {
  .nav-links {
    position: relative;
    
    top: 84px;
  }
  
}
@media (max-width: 1500px) {
  .nav-links {
    position: relative;
    
    top: 84px;
  }
}
</style>