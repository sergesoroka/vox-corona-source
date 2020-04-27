<template>
  <section id="posts">
    <Monitor />
  </section>
</template>

<script>
import Monitor from '@/components/Monitor/Monitor'
export default { components: { Monitor } }
</script>

<style scoped>
#posts {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 1440px;
  margin: 0 auto;
}
@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>
