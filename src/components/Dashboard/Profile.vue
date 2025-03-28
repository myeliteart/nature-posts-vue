<template>
   <h3>My Profile</h3>
<div class="vee py-2">
   <form class="fWidth" @submit.prevent="editProfile">
      <div>
         <input type="text" class="my-3 form-control" v-model="profileEdit.first" :disabled="!isEditing">
      </div>
      <div>
         <input type="text" class="my-3 form-control" v-model="profileEdit.last" :disabled="!isEditing">
      </div>
      <div>
         <input type="text" class="my-3 form-control" v-model="profileEdit.email" :disabled="!isEditing">
      </div>
      <base-button class="my-0" >{{ isEditing ? 'Save' : 'Edit'}} Profile</base-button>
   </form>

</div>
   
</template>

<script setup>
   import { ref } from 'vue';

   import { useUserStore } from '@/stores/users'
   const userStore = useUserStore()
   import { storeToRefs } from 'pinia';
   const { vee } = storeToRefs(userStore);

   const isEditing = ref(false);

   const profileEdit = ref({
      first: vee.value.first,
      last: vee.value.last,
      email: vee.value.email
   });

   const editProfile = () => {
      if(isEditing.value) {
         if(profileEdit.value.first !== '' && profileEdit.value.last !== '' && profileEdit.value.email !== '') {
            vee.value = profileEdit.value
         } else {
            alert('please enter values');
            vee.value != profileEdit.value
            return
         }
      } else{
         vee.value != profileEdit.value
      }
      isEditing.value = !isEditing.value
   }
</script>

<style scoped>
   .vee {
      display: block;
   }
   .form-control {
      border-color: rgb(198, 198, 198);
   }
   .fWidth{
      width: 35%;
   }

   @media only screen and (max-width: 600px) {
      .fWidth{
      width: 100%;
   }
   }
</style>