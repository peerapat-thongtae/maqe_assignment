<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { IPost } from '../../types/post.type.ts'
import { getAuthorById } from '../../services/author.service.ts'
import { formatFullDateText } from '../../utils/date.utils.ts'
const props = defineProps({
  post: {
    type: Object as PropType<IPost>,
    required: true,
  },
})

const post = computed(() => props.post)

const author = computed(() => getAuthorById(post.value.author_id))
const postedAt = computed(() => formatFullDateText(post.value.created_at))
</script>

<template>
     <div class="post-container">
          <div class="author-detail">
               <img :src="author?.avatar_url" class="img-author-posted" />
               <span class="author-name">
                    {{ author?.name || '-' }}
               </span>
               <span class="author-post-detail">
                    posted on {{ postedAt }}
               </span>
          </div>
          <hr class="line-break" />
          <div class="post-detail">
               <img :src="post.image_url" />
               <div>
                    <div class="post-title">{{ post.title }}</div>
                    <div class="post-body mt-4">
                         {{ post.body }}
                    </div>
               </div>
          </div>
     </div>
</template>

<style scoped>   
.post-container {
     margin-bottom: 12px;
     margin-top: 12px;
}

.line-break {
     border-top: 1px solid #eeeeee;
}


.author-detail {
     display: flex;
     padding-top: 0.5rem;
     padding-bottom: 0.5rem;
     align-items: center;
}

.author-detail .author-name {
     color: #f7532c;
     font-weight: bold;
     margin-right: 0.5rem;
}

.author-detail .author-post-detail {
     color: #9da7b1;
}

.post-title {
     font-size: 1.125rem;
     line-height: 1.75rem;
     font-weight: 700;
     color: #000000;
}

.img-author-posted {
     margin-right: 0.25rem;
     margin-left: 1rem;
     border-radius: 9999px;
     width: 1.5rem;
     height: 1.5rem;
}

.post-detail {
     display: flex;
     padding-left: 1rem;
     padding-right: 1rem;
     padding-top: 1.5rem;
     padding-bottom: 1.5rem;
     gap: 2rem;
}
</style>