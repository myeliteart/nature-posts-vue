<template>
   <div class="container pb-4">
    <base-button mode="reverse" @click="router.back()" class="my-4">Back</base-button>

    <div class="row">
        <div class="col-sm-9"> 
            <img :src="oneArticle.img" class="img-fluid rounded ht">
            <div class="d-flex">
                <p v-for="itm in oneArticle.tag" class="me-4 pt-3"                                 
                    :class="itm == 'sky' ? 'sky' : '', itm == 'mountain' ? 'mountain' : '', itm == 'sun' ? 'sun' : '', itm == 'tree' ? 'tree' : '', itm == 'water' ? 'water' : '', itm == 'sun' ? 'sun' : ''">
                    {{ itm }}
                </p>
                <p class="pt-3" v-if="userStore.vee.first !== '' && userStore.vee.last !== ''">| &nbsp; &nbsp; Posted By: &nbsp; <b>{{ userStore.vee.first }} {{ userStore.vee.last }}</b></p>
            </div>
            <h2 class="pb-1">{{ oneArticle.title }}</h2>
            <p>{{ oneArticle.desc }}</p>

            <base-button @click="addReview(oneArticle)" class="mt-1 mb-3">Write a Review</base-button>

            <div v-for="item in oneArticle.review">
                <h4>{{ item.title }}</h4>
                <p>{{ item.review }}</p>
                <p>Rating: <b>{{ item.rate }}</b></p>
                <hr v-if="oneArticle.review.length">
            </div>
            
        </div>
    </div>
   </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    const route = useRoute();
    const router = useRouter();

    // articles store
    import { useArticlesStore } from '@/stores/articles'
    const articlesStore = useArticlesStore()

    import { storeToRefs } from 'pinia'; 
    const { allArticles, reviewingItem, rview } = storeToRefs (articlesStore)

    // auth store
    import { useUserStore } from '@/stores/users'
    const userStore = useUserStore()

    const oneArticle = computed(() => {
        return allArticles.value.find(itm => itm.title.toLowerCase().split(' ').join('-') == route.params.id)
    })

    const addReview = (one) => {
        router.push({name: 'AddReview'});
        reviewingItem.value = one
    }

</script>

<style scoped>
    .ht {
        height: 650px;
        object-fit:cover;
    }

    .sky {
        color: #1bc0e1;
    }
    .mountain {
        color: #8a5111;
    }
    .water {
        color: #2568a8;
    }
    .tree {
        color: #25a876;
    }
    .sun {
        color: #df8200;
    }

    .blu {
        color: #1bc0e1;
    }
   
</style>