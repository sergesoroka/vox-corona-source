<template>
  <div class="container">
  
    <div class="posts">
    
      <PostPreview
        v-for="post in postsToShow"
        :key="post.id"
        :title="post.title"
        :excerpt="post.previewText"
        :thumbnailImage="post.thumbnailUrl"
        :id="post.id"
        :category="post.category"
        :link="post.link"
      />
    </div>
    <div class="btn-wrapper">
      <button v-if="actualPosts.length > 6" class="load-more-btn" @click="showMore">Завантажити матеріали</button>
    </div>
  </div>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      itemToShow: 6
    }
  },

  methods: {
    showMore: function() {
      return (this.itemToShow += 3)
    }
  },

  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published'
      })
      .then(res => {
        return {
          posts: res.data.stories.map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,

              thumbnailUrl: bp.content.thumbnail,
              category: bp.content.category,
              link: bp.content.external_link.url
            }
          })
        }
      })
  },
  computed: {
    actualPosts: function() {
      return this.posts.filter(function(i) {
        return i.category === 'digest'
      })
    },
    postsToShow: function() {
      return this.actualPosts.slice(0, this.itemToShow)
    }
  }
}
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: 400px 400px 400px;
}

.load-more-btn {
  height: 61px;
  width: 240px;
  text-transform: uppercase;
  font-weight: 700;
  background-color: #f5e52e;
  border: none;
  font-size: 18px;
  text-align: center;
  
  border-radius: 6px;
  letter-spacing: 0.2px;
  cursor: pointer;
}
.load-more-btn:hover {
  background-color: #00baf1;
}
.btn-wrapper {
  text-align: center;
}

@media (max-width: 425px) {
  .posts {
    grid-template-columns: 100%;
  }
}
</style>
