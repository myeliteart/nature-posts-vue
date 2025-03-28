<template>
    <div class="container">
        <base-button mode="reverse" v-if="allFavorites.length" @click="router.back()" class="my-4">Back</base-button>
        
        <div class="row">
            <div class="col text-center pt-5 mt-5" v-if="!allFavorites.length">
                <p>Your Favorites folder is currently empty</p>
                <base-button @click="router.push('/')">Home Page</base-button>
            </div>
            <div class="col-sm-3 d-block mb-4" v-for="(item, index) in allFavorites" :key="item">
                <div class="card">
                <img :src="item.img" class="card-img-top img-fluid ht" alt="...">
                <div class="card-body">
                    <div class="d-flex">
                       <p v-for="itm in item.tag" class="me-4"
                       :class="itm == 'sky' ? 'sky' : '', itm == 'mountain' ? 'mountain' : '', itm == 'sun' ? 'sun' : '', itm == 'tree' ? 'tree' : '', itm == 'water' ? 'water' : '', itm == 'sun' ? 'sun' : ''"
                       >
                         {{ itm }}
                        </p>  
                    </div>
                   
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="card-text">{{ item.desc.slice(0, 57) + '...' }}</p>
                    <p>Rating: {{ item.rating }}</p>
                    <div class="d-flex justify-content-between">
                        <base-button @click="more(item)">Read More</base-button>
                        <base-button mode="reverse" @click="showDialog(item)">Remove Favorite</base-button>
                    </div>
                </div>
                </div>
            </div>    
        </div> 
       
        <Teleport to="body">
            <base-dialog v-if="favoriteSelected">
                <p>Are you sure you want to delete <b>{{ favoriteSelected.title }}</b>?</p>
                <div class="d-flex justify-content-end">
                    <base-button mode="reverse" class="me-3" @click="cancel">Cancel</base-button>
                    <base-button @click="dltFavorites">Confirm</base-button>
                </div>
            </base-dialog>
        </Teleport>

    </div>
</template>

<script setup>
     import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();

    // articles store
    import { useArticlesStore } from '@/stores/articles'
    const articlesStore = useArticlesStore()

    import { storeToRefs } from 'pinia'; 
    const { allFavorites, count, favoriteSelected } = storeToRefs (articlesStore);

    const more = (itemm) => {
        router.push({name: 'articlDetails', params: {id: itemm.title.toLowerCase().split(' ').join('-')}})
    }
    const dltFavorites = () => {
        allFavorites.value = allFavorites.value.filter(itm => itm.id !== favoriteSelected.value.id)
        favoriteSelected.value = null;
        count.value--
    }
    const showDialog = (itemmm) => {
        favoriteSelected.value = itemmm;
    }
    const cancel = () => {
        favoriteSelected.value = null;
    }
</script>

<style scoped>
    .ht {
        height: 200px;
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
</style>