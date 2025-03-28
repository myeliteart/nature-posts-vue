<template>
    <Carousel :wrapAround="true" :autoplay="0">
    <Slide v-for="slide in articleSlides" :key="slide.id">
        <div class="slider_bck" :style="{background: `url(${slide.img})`}">
            <div class="slide_content">
                <div class="item">
                    <div>{{ slide.title }}</div> 
                    <div>{{ slide.desc }}</div> 
                </div>
            </div>
        </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
     // articles store
     import 'vue3-carousel/carousel.css'
     import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

     import { useArticlesStore } from '@/stores/articles'
    const articlesStore = useArticlesStore()

    import { storeToRefs } from 'pinia'; 
    const { articleSlides } = storeToRefs (articlesStore)
</script>