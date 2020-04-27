<template>
  <a :href="link" target="_blank">
    <article class="post-preview container-overlay">
      <div :style="{ backgroundImage: 'url(' + digestImg + ')' }" class="post-preview-thumbnail"></div>
    </article>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    digestImg: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
h1.cart-title {
  margin-top: 0;
  text-align: left;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.3px;
  font-weight: 700;
}
.post-preview {
  width: 367px;
}
.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 525px;
  border: 13px solid #ccc;
  filter: gray; /* IE5+ */
  -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
  -webkit-transition: all 0.2s ease-in-out;
}

.post-preview-thumbnail:hover {
  filter: none;
  -webkit-filter: grayscale(0);
}
.post-preview-content {
  text-align: center;
  padding: 1rem;
}
.cat-name {
  text-transform: uppercase;
  font-size: 0.8rem;
  color: brown;
  letter-spacing: 0.1rem;
  font-weight: 600;
}

.container-overlay {
  position: relative;
}
@media (max-width: 425px) {
  .post-preview {
    width: 100%;
    margin-bottom: 26px;
  }
}
</style>
