<template>
  <h3>Add Articles</h3>
  <Form
    @submit="onSubmit"
    :validation-schema="schemaArticle"
    class="fWidth py-3"
  >
    <Field name="title" v-slot="{ field, errors, errorMessage }">
      <input
        type="text"
        class="form-control my-1 mb-3"
        placeholder="Nature Title"
        :class="{ 'is-invalid': errors.length !== 0 }"
        v-bind="field"
      />
      <div class="input_alert" v-if="errors.length !== 0">
        {{ errorMessage }}
      </div>
    </Field>

    <Field
      name="desc"
      v-slot="{ field, errors, errorMessage }"
      class="form-control my-1 mb-3">
      <textarea
        rows="5"
        class="form-control my-1 mb-3"
        placeholder="Nature Text"
        :class="{ 'is-invalid': errors.length !== 0 }"
        v-bind="field"
      ></textarea>
      <div class="input_alert" v-if="errors.length !== 0">
        {{ errorMessage }}
      </div>
    </Field>

    <div class="cntr">
      <div v-for="i in checkedNames">
        <input
          type="checkbox"
          v-model="selectedNames"
          :value="i"
          class="me-1"
        />
        <label>{{ i }}</label>
      </div>
    </div>

    <!-- <Field
      name="rating"
      v-slot="{ field, errors, errorMessage }"
      value="Please select a rating"
    >
      <select
        class="form-select my-1 mb-3"
        v-bind="field"
        :class="{ 'is-invalid': errors.length !== 0 }"
      >
        <option value="Please select a rating">Please select a rating</option>
        <option :value="rating" v-for="rating in ratingArray" :key="rating">
          {{ rating }}
        </option>
      </select>
      <div class="input_alert" v-if="errors.length !== 0">
        {{ errorMessage }}
      </div>
    </Field> -->
    
    <Field name="img" v-slot="{ field, errors, errorMessage }">
      <input
        type="text"
        class="form-control my-1 mb-3"
        placeholder="Nature Image"
        :class="{ 'is-invaild': errors.length !== 0 }"
        v-bind="field"
      />
      <div class="input_alert" v-if="errors.length !== 0">
        {{ errorMessage }}
      </div>
    </Field>
    <base-button mode="reverse" type="submit">Add Article</base-button>
  </Form>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

import { ref } from "vue";
import { Field, Form } from "vee-validate";

import schemaArticle from "@/components/Dashboard/schema";

// articles store
import { useArticlesStore } from "@/stores/articles";
const articlesStore = useArticlesStore();

import { storeToRefs } from "pinia";
const { articlesValues, allArticles, count, articleSlides, id } =
  storeToRefs(articlesStore);



const checkedNames = ref(["sun", "water", "tree", "mountain", "sky"]);
let selectedNames = ref([]);

const onSubmit = (values, { resetForm }) => {
  router.push("/");
  articlesValues.value = {
    id: allArticles.value.length + 1,
    title: values.title,
    desc: values.desc,
    review: [],
    img: values.img,
    tag: selectedNames.value
  };
  allArticles.value.push(articlesValues.value)
};
console.log(allArticles.value);
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
