<template>
  <h3>Edit Articles</h3>
  <form @submit.prevent="editedContent" class="fWidth py-3">
    <input
      type="text"
      class="form-control my-1 mb-3"
      v-model="articlesValues.title"
    />
    <textarea
      rows="5"
      class="form-control my-1 mb-3"
      v-model="articlesValues.desc"
    ></textarea>

    <div class="cntr">
      <div v-for="i in checkedNames">
        <input  
          type="checkbox"
          v-model="articlesValues.tag"
          :value="i"
          class="me-1"
        />
        <label>{{ i }}</label>
      </div>
    </div>

    <input
      type="text"
      class="form-control my-1 my-3"
      v-model="articlesValues.img"
    />
    <base-button mode="reverse" type="submit">Edit Article</base-button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

import { useRouter } from "vue-router";
const router = useRouter();

// articles store
import { useArticlesStore } from "@/stores/articles";
const articlesStore = useArticlesStore();

import { storeToRefs } from "pinia";
const { articlesValues, allArticles } = storeToRefs(articlesStore);

const checkedNames = ref(["sun", "water", "tree", "mountain", "sky"]);

const editedContent = () => {
  
  let index = allArticles.value.findIndex(
    (item) => item.id === articlesValues.value.id
  );

//   if(!index) return

  allArticles.value[index].title = articlesValues.value.title
  allArticles.value[index].desc = articlesValues.value.desc
  allArticles.value[index].tag = articlesValues.value.tag
  allArticles.value[index].img = articlesValues.value.img
  router.push('/')
};

</script>


<style scoped>
.form-control,
.form-select {
  border-color: rgb(198, 198, 198);
}

.fWidth {
  width: 50%;
}

input[type="checkbox"] {
  width: 15px;
  height: 15px;
  margin-top: 5px;
  align-items: center;
}

.cntr {
  font-size: 17px;
  margin: 18px 0;
}

@media only screen and (max-width: 600px) {
  .fWidth {
    width: 100%;
  }
}
</style>
