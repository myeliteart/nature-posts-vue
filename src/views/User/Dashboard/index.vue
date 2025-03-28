<template>
    <div class="container-fluid">
        <div class="row" v-if="!auth">
            <div class="col-sm-2 border-end py-3 bg-light linksH">
                <db-links></db-links>
            </div>
            <div class="col-sm-10 py-4 px-sm-4">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
   // auth store
   import dbLinks from '@/components/Dashboard/dbLinks.vue';
   import { useUserStore } from '@/stores/users'
    const userStore = useUserStore()
    
    import { storeToRefs } from 'pinia'; 
    const { tabs, auth } = storeToRefs(userStore)
    
    import { useRoute, useRouter } from 'vue-router';
    const route = useRoute();
    const router = useRouter()

    // const allTab = (tab) =>{
    //     router.push({name: tab.toLowerCase().split(' ').join(''), params: {id: tab.toLowerCase().split(' ').join('-')}})
    // }

</script>

<style scoped>
    .crsr {
        cursor: pointer;
    }
    .linksH{
        height: 100vh;
    }

    .border-end {
        border-right: 1px solid #9fa2a4;
    }

    @media only screen and (max-width: 600px) {
        .linksH{
            height: auto;
        }
   }
</style>