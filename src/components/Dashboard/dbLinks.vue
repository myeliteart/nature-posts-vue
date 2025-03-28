<template>
     <nav>
        <ul v-for="tab in tabs" class="navbar-nav px-3">
            <li class="nav-item border-bottom py-1">
                <router-link class="nav-link crsr" :to="`/user/dashboard/${tab.toLowerCase().split(' ').join('-')}`"> {{  tab }} </router-link> 
            </li>
        </ul>
    </nav>
</template>

<script setup>
     import { useUserStore } from '@/stores/users'
    const userStore = useUserStore()
    
    import { storeToRefs } from 'pinia'; 
    const { tabs } = storeToRefs(userStore)

    import { useRoute, useRouter } from 'vue-router';
    const route = useRoute();
    const router = useRouter();

</script>

<style scoped>
    .crsr {
        cursor: pointer;
    }

    .activeLink {
        font-weight: 600;
    }
</style>