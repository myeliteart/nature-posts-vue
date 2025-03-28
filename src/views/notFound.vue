<template>
    <div class="container">
        <div class="text-center cntr">
        <div>
            <h1>404 page</h1>
            <p>Sorry no page to be found here</p>
            <base-button @click="router.push('/')">Home Page</base-button>
        </div>
        </div>
    </div>

</template> 

<script setup>
     import { useRouter } from 'vue-router';
     const router = useRouter();
</script>

<style scoped>
    .cntr {
        align-items: center;
        height: 500px;
        line-height: 500px;
    }
    .cntr div{
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
</style>

