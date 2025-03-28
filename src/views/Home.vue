<template>
    <div class="container-fluid px-0">
         <carousel></carousel>
    </div>
    <div class="container py-5">
        <div class="row">
            <div class="text-center" v-if="!allArticles.length">
                <p>No articles to be found here</p>
            </div>
            <div v-if="allArticles.length" class="mb-4 pb-3 d-flex">
                    <div v-for="view in views" 
                        @click="crnView = view" 
                        class="me-4 crsr"  
                        :class="crnView == view ? 'bld' : ''">
                        {{ view }}
                    </div>
                    <!-- <div class="ms-auto">Sort By:</div> &nbsp; &nbsp;
                    <div>
                        <select class="form-select crsr" v-model="sortedSelected">
                            <option v-for="sort in sorted" :value="sort">{{ sort }}</option>
                        </select>
                    </div> -->
            </div>

            <!-- grid view -->

            <div class="col-sm-3 d-block mb-4" v-for="item in allArticles" :key="item" v-if="crnView == 'Grid View'">
                <div class="card grid">
                    <img :src="item.img" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <div class="d-flex">
                            <p v-for="itm in item.tag" 
                                class="me-4 crsr"
                                @click="tagPage(itm)"
                                :class="itm == 'sky' ? 'sky' : '', itm == 'mountain' ? 'mountain' : '', itm == 'sun' ? 'sun' : '', itm == 'tree' ? 'tree' : '', itm == 'water' ? 'water' : '', itm == 'sun' ? 'sun' : ''">
                                {{ itm }}
                            </p>
                        </div>
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ `${item.desc.slice(0, 58)}...` }}</p>
                        <!-- <p>Rating: {{ item.rating }}</p> -->
                        <div class="d-flex justify-content-between">
                            <base-button @click="more(item)">Read More</base-button>
                            <base-button :mode="allFavorites.find(itmm => itmm == item) ? 'notReverse' : 'reverse'" @click="toFavorites(item)">{{ allFavorites.find(itmm => itmm == item) ? 'Added' : 'Favorites' }}</base-button>
                        </div> 
                    </div>
                </div>
            </div>

            <!-- list view -->

            <div class="col-12 d-block mb-4" v-for="(item, index) in allArticles" :key="item" v-if="crnView == 'List View'">
                <div class="list">
                    <img :src="item.img" class="img-fluid rounded" :alt="item.name">
                    <div>
                        <h5>{{ item.title }}</h5>
                    </div>
                       <div>{{ `${item.desc.slice(0, 58)}...` }}</div>
                    <div>
                        <base-button @click="more(item)">Read More</base-button> &nbsp;
                        <base-button :mode="allFavorites.find(itmm => itmm == item) ? 'notReverse' : 'reverse'" @click="toFavorites(item)">{{ allFavorites.find(itmm => itmm == item) ? 'Added' : 'Favorites' }}</base-button>
                    </div>
                </div> 
            </div>
        </div> 
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    import Carousel from '@/components/Carousel.vue';

    import { useRouter } from 'vue-router';
    const router = useRouter();

     // articles store
    import { useArticlesStore } from '@/stores/articles'
    const articlesStore = useArticlesStore()

    import { storeToRefs } from 'pinia'; 
    const { allArticles, allFavorites, sorted, count, sortedSelected } = storeToRefs (articlesStore)

    const views = ref(['Grid View', 'List View']);
    const crnView = ref('Grid View')

    const toFavorites = (item) => {
        const there = allFavorites.value.findIndex(itm => itm == item)
        if(there >= 0) {
            allFavorites.value.splice(there, 1)
            count.value--
        } else{
            allFavorites.value.unshift(item)
            count.value++
        }
    }
    console.log(allArticles.value)
    
    const more = (itemm) => {
        router.push({name: 'articlDetails', params: {id: itemm.title.toLowerCase().split(' ').join('-')}})
    }

    const tagPage = (tagItem) => {
        router.push(tagItem + '-' + 'articles')
    }
    
    // const sortIt = computed(() => {
    //     if(sortedSelected.value == 'Top Rated') {
    //         return allArticles.value.sort((a, b) => b.rating - a.rating)
    //     } else  if(sortedSelected.value == 'A to Z') {
    //         return allArticles.value.sort((a, b) => a.title.localeCompare(b.title))
    //     }
    // })
</script>

<style scoped>
    .list {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .list img {
         height: 55px;
        width: 83px;
        object-fit:cover;
    }
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
        padding-bottom: 5px;
    }

    .form-select {
        padding: 0.155rem 2.25rem 0.155rem 0.75rem;
        outline: none;
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