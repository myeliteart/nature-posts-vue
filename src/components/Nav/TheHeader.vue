<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 border-bottom">
  <div class="container">
    <router-link :to="{ name: 'home'}" class="logo navbar-brand">eli's nature</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto pt-2 pt-sm-0">
        <li class="nav-item" v-if="articlesStore.allArticles.length !== 0">
            <router-link class="nav-link" aria-current="page" :to="{ name: 'favorites'}">Favorites (<b>{{ articlesStore.count }}</b>)</router-link>
        </li>
        <li class="nav-item" v-if="userStore.auth">
            <router-link class="nav-link" aria-current="page" :to="{ name: 'signin'}">Sign in</router-link>
        </li>
        <li class="nav-item" v-if="!userStore.auth" @click="userStore.auth = true">
            <div class="nav-link crsr" aria-current="page" @click="normal">Logout</div>
        </li>
        <li class="nav-item circle-fill" v-if="!userStore.auth">
            <router-link class="nav-link active" aria-current="page" :to="{ name: 'dashboard'}">{{ userStore.vee.first.substring(0, 1) }}</router-link>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    // auth store
    import { useUserStore } from '@/stores/users'
    const userStore = useUserStore()

     // articles store
     import { useArticlesStore } from '@/stores/articles'
    const articlesStore = useArticlesStore()

     const normal = () => {
       router.push('/')
     }
</script>

<style scoped>
    .border-bottom {
        border-bottom: 5px solid #1bc0e1 !important;
    }

    .nav-item {
        margin: 0 9px;
    }

    .logo { 
        font-family: 'Bungee Inline', cursive;
        font-size: 30px;
        }

        .weight {
          font-weight: normal;
        }

        .crsr {
          cursor: pointer;
        }

        .circle-fill{
          background-color: #1bc0e1;
          border: 0px solid #1bc0e1;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          text-align: center;
          align-items: center;
          font-size: 17px;
        }
        .circle-fill:hover{
          background-color: transparent;
          border: 2px solid  #1bc0e1;
        }
</style>