<template>
    <div class="wrapper">
    <div class="roww2">
        <div class="box">Title</div>
        <div class="box">User</div>
        <!-- <div class="box">Rating</div> -->
        <div class="box">Date</div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
    <div class="roww" v-for="item in allArticles" :key="item.id">
        <div class="box">{{  item.title }}</div>
        <div class="box">{{ userStore.vee.first }} {{ userStore.vee.last }}</div>
        <!-- <div class="box">{{ item.rating }}</div> -->
        <div class="box">{{ alley }}</div>
        <div class="box"><base-button mode="reverse" class="box" @click="deleteConfirm(item)">Delete</base-button></div>
        <div class="box"><base-button mode="reverse" class="box" @click="edited(item)">Edit</base-button></div>
    </div>
   
    </div>

    <Teleport to="body">
        <base-dialog v-if="articleSelected">
            <p>Are you sure you want to delete <b>{{ articleSelected.title }}</b> ?</p>
            <div class="d-flex justify-content-end">
                <base-button mode="reverse" class="me-2" @click="cancel" @cancel="cancel">Cancel</base-button>
                <base-button @click="deleteA">Confirm</base-button>
            </div>
        </base-dialog>
    </Teleport>
</template>

<script setup>  
    import { useRouter } from 'vue-router';
    const router = useRouter();

     // articles store
    import { useArticlesStore } from '@/stores/articles'
    const articlesStore = useArticlesStore()

    import { storeToRefs } from 'pinia'; 
    const { allArticles, articlesValues, articleSelected } = storeToRefs(articlesStore)

    // auth store
    import { useUserStore } from '@/stores/users'
    const userStore = useUserStore()

    const deleteConfirm = (itemm) => {
        articleSelected.value = itemm
    }
    const deleteA = () => {
        if(articleSelected.value) {
            allArticles.value = allArticles.value.filter(itm => itm.id !== articleSelected.value.id)
            articleSelected.value = null
        }  
    }
    const cancel = () =>{
        articleSelected.value = null
    }
    const edited = (itemm) => {
        router.push({name: 'editarticles'})
        articlesValues.value = {
            id: itemm.id,
            title: itemm.title,
            desc: itemm.desc,
            tag: itemm.tag,
            rating: itemm.rating,
            img: itemm.img
        }
        console.log(articlesValues.value)
    }
   

        const today = new Date();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const day = daysOfWeek[today.getDay()]
        const year = today.getFullYear()
        const mnth = monthNames[today.getMonth()];
        const mnthDay = today.getDate()
        const alley = day + ", " + mnth + " " + mnthDay + ", " + year
        
</script>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(6, minmax(50px, 1fr));
        background-color: rgb(33 37 41);
        color: #fff;
        max-width: auto;
    }

    .roww {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: repeat(6, minmax(50px, 1fr));
        align-items: center;
        background-color: #f5f3f3;
        border-bottom: 1px solid rgb(33 37 41);
        }
        .roww2 {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: repeat(6, minmax(50px, 1fr));
        align-items: center;
        background-color: rgb(33 37 41);
        border-bottom: 0px solid rgb(33 37 41);
        }
    .roww .box {
        color: #000;
        padding: 9px 15px;
        font-size: 100%;        
        }

        .roww2 .box {
        color: #fff;
        padding: 9px 15px;
        font-size: 100%;        
        }

        /* .box button.red {
            color:  #d08585;
            background-color: transparent;
            padding: 5px 13px;
            border: 1px solid  #d08585;
            border-radius: .3rem;
        }
        .box button.ylw {
            color: #e4de9c;
            background-color: transparent;
            padding: 5px 15px;
            border: 1px solid  #e4de9c;
            border-radius: .3rem;
        } */
</style>