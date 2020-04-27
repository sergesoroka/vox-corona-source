<template>
  <div>
    <div class="container">
      <div class="item cl-1">
        <PostPreview
          v-for="post in firstColumnPosts.slice(0, 2)"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnailImage="post.thumbnailUrl"
          :id="post.id"
          :category="post.category"
          :link="post.link"
        />
      </div>
      <div class="item cl-2">
        <MainDigest
          v-for="post in digest.slice(0, 1)"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :digestImg="post.digestImg"
          :id="post.id"
          :category="post.category"
          :link="post.link"
        />
      </div>

      <div class="item cl-3-1">
        <PostPreview
          v-for="post in firstColumnPosts.slice(2, 3)"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnailImage="post.thumbnailUrl"
          :id="post.id"
          :category="post.category"
          :link="post.link"
        />
      </div>

      <div class="item cl-3-2 useful-links">
        <Links />
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'
import MainDigest from '@/components/MainDigest/MainDigest'
import Links from '@/components/Links/Links'

export default {
  components: {
    PostPreview,
    MainDigest,
    Links
  },
  mounted() {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
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
              digestImg: bp.content.mainDigestImg,

              thumbnailUrl: bp.content.thumbnail,
              category: bp.content.category,
              link: bp.content.external_link.url
            }
          })
        }
      })
  },
  computed: {
    digest: function() {
      return this.posts.filter(function(item) {
        return item.category === 'digest'
      })
    },
    limitPosts: function() {
      return this.posts.slice(0, 6)
    },
    firstColumnPosts: function() {
      return this.posts.filter(function(item) {
        return item.category !== 'digest' && item.category !== 'antifake'
      })
      // return this.posts.slice(0, 2)
    }
  }
}
</script>

<style scoped>
.posts {
  padding-top: 0.5rem;
  display: grid;
  grid-template-columns: 400px 400px 400px;
}

@media (max-width: 425px) {
  .posts {
    grid-template-columns: 100%;
  }
}

/* grid */
.container {
  display: grid;

  /* width: 750px; */
  height: 600px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 32px;
  grid-template-areas:
    'cl-1 cl-2 cl-3-1'
    'cl-1 cl-2 cl-3-2';
}

.item {
  /* width: 367px; */
}
.cl-1 {
  grid-area: cl-1;
}

.cl-2 {
  grid-area: cl-2;
}

.cl-3-1 {
  grid-area: cl-3-1;
}

.cl-3-2 {
  grid-area: cl-3-2;
}

.useful-links {
  background-color: #ccc;
  margin-top: -32px;
  height: 210px;
  border-left: 13px solid #f5e52e;
}
@media (max-width: 425px) {
  .container {
    grid-template-columns: 100%;
    display: inline;
    grid-row-gap: 76px;
  }
  .useful-links {
    margin-top: 0;
    padding-top: 4px;
  }
}
</style>
