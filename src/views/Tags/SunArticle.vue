<template>
    <div class="container">
        <base-button mode="reverse" v-if="onlySunTag.length" @click="router.back()" class="my-4">Back</base-button>
        <div class="row">
            <div class="text-center my-5 py-5" v-if="!onlySunTag.length">
                <p>No articles to be found here</p>
                <base-button @click="router.push('/')">Home Page</base-button>
            </div>
            <div class="pb-4" v-if="onlySunTag.length">
                <h3>Sun Articles</h3>
                <hr class="m-0">
            </div>
           
            <div v-if="onlySunTag.length" class="col-sm-3 d-block mb-4" v-for="item in onlySunTag" :key="item">
                <div class="card grid">
                    <img :src="item.img" class="card-img-top img-fluid" :alt="item.title">
                    <div class="card-body">
                        <div class="d-flex">
                            <p v-for="itm in item.tag" 
                                class="me-4" 
                                :class="itm == 'sky' ? 'sky' : '', itm == 'mountain' ? 'mountain' : '', itm == 'sun' ? 'sun' : '', itm == 'tree' ? 'tree' : '', itm == 'water' ? 'water' : '', itm == 'sun' ? 'sun' : ''">
                                {{ itm }}
                            </p>
                        </div>
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ `${item.desc.slice(0, 58)}...` }}</p>
                        <p>Rating: {{ item.rating }}</p>
                        <div class="d-flex justify-content-between">
                            <base-button @click="more(item)">Read More</base-button>
                            <base-button :mode="articlesStore.allFavorites.find(itmm => itmm == item) ? 'notReverse' : 'reverse'" @click="toFavorites(item)">{{ articlesStore.allFavorites.find(itmm => itmm == item) ? 'Added' : 'Favorites' }}</base-button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
 import { computed, ref } from 'vue';

 import { useRoute, useRouter } from 'vue-router';
    const route = useRouter();
    const router = useRouter();

     // articles store
     import { useArticlesStore } from '@/stores/articles'
    const articlesStore = useArticlesStore()

    // const sortIt = computed(() => {
    //     if(articlesStore.sortedSelected == 'Top Rated') {
    //         return articlesStore.allArticles.sort((a, b) => b.rating - a.rating)
    //     } else  if(articlesStore.sortedSelected == 'A to Z') {
    //         return articlesStore.allArticles.sort((a, b) => a.title.localeCompare(b.title))
    //     }
    // })

    const more = (itemm) => {
        router.push({name: 'articlDetails', params: {id: itemm.title.toLowerCase().split(' ').join('-')}})
    }

    const toFavorites = (item) => {
        const there = articlesStore.allFavorites.findIndex(itm => itm == item)
        if(there >= 0) {
            articlesStore.allFavorites.splice(there, 1)
            articlesStore.count--
        } else{
            articlesStore.allFavorites.unshift(item)
            articlesStore.count++
        }
    }

    
    const filteredTagItem = ref([]);

    const onlySunTag = computed(() => {
        return filteredTagItem.value = articlesStore.allArticles.filter(itmm => itmm.tag.includes('sun'))
    })
</script>


<style scoped>
    .grid img {
        height: 200px;
        object-fit:cover;
    }

    .crsr, .crsr div {
        cursor: pointer;
    }
    .bld {
        font-weight: 700;
        border-bottom: 2px solid #1bc0e1;
    }

    .form-select {
        padding: 0.155rem 2.25rem 0.155rem 0.75rem;
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
</style>