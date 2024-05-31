<script setup lang="ts">
import { getPosts } from './services/post.service.ts'
import { getCurrentTimeZone } from './utils/date.utils.ts'
import Post from './components/Posts/Post.vue'
const timezone = getCurrentTimeZone()
const posts = getPosts()
</script>

<template>
  <div class="main-container">
    <div class="header-title">MAQE Forum</div>
    <div class="">
      Your current timezone is: {{ timezone }}
    </div>

    <div v-for="(post, index) in posts" :style="(index % 2 !== 0) ? {'background-color': '#ccecff'} : {'background-color': '#ffffff'}">
      <Post :post="post" />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  padding-left: 8rem;
  padding-right: 8rem; 

  padding-top: 4rem;
  padding-bottom: 4rem;
}

.header-title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  margin-bottom: 24px;
}
</style>
