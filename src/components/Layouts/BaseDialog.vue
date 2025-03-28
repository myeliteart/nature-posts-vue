<template>
    <div @click="cancel"></div>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<script setup>
    const emit = defineEmits(['cancel'])
     import { useArticlesStore } from '@/stores/articles'
     const articlesStore = useArticlesStore()

     const cancel = () => {
        articlesStore.articleSelected = null;
        articlesStore.favoriteSelected = null
     }
</script>

<style scoped>
div{
    position: fixed;
    opacity: 0.8;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
}
    dialog {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 17px 19px;
        margin: 0rem auto;
        border: none;
        border-radius: .4rem;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        /* text-align: center; */
        z-index: 100;
        margin: 0;
        overflow: hidden;
    }
</style>