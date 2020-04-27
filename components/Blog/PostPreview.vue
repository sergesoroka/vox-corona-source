<template>
  <a :href="link" target="_blank" class="post-preview">
    <article class="container-overlay">
      <div
        :style="{ backgroundImage: 'url(' + thumbnailImage + ')' }"
        class="post-preview-thumbnail"
      ></div>

      <div class="post-preview-content overlay">
        <h1 class="cart-title">{{ title }}</h1>
      </div>
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
    thumbnailImage: {
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
.cart-title {
  margin-top: 0;
  text-align: left;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.3px;
  font-weight: 700;
}
.post-preview {
  width: 367px;
  margin-bottom: 17px;
}
.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 210px;
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
  padding: 0.5rem 0.8rem;
}

.container-overlay {
  position: relative;
  height: 316px;
}

@media (max-width: 425px) {
  .post-preview {
    width: 100%;
  }
  .container-overlay {
  
  height: auto;
}
}
</style>
