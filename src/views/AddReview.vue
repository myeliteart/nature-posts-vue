<template>
    <div class="container pb-4">
        <base-button mode="reverse" @click="router.back()" class="my-4">Back</base-button>
        <div class="row" v-if="articlesStore.reviewingItem">
            <div class="col-sm-7">
                <div class="d-flex justify-content-between">
                    <h4 class="my-3">Review: {{ reviewingItem.title }}</h4>
                    <img :src="reviewingItem.img" :alt="reviewingItem.title" class="img-fluid circle">
                </div>
                
                <Form :validation-schema="formSchemeDetails" @submit="submitReview">
                    
                    <Field
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
                    </Field>
                    
                    <Field v-slot="{field, errors, errorMessage}" name="title">
                        <input type="text"
                        class="form-control my-2"
                        placeholder="Title"
                        v-bind="field"
                        :class="{'is-invalid': errors.length !== 0}"
                        >
                        <div class="input_alert"
                        v-if="errors.length !== 0">
                         {{ errorMessage }}
                        </div>
                    </Field>
                    <label class="w-100 my-2">
                        <div>Display Name:</div>
                        <input type="text" class="form-control mt-1" :value="userStore.vee.first" disabled>
                    </label>  
                    <Field v-slot="{field, errors, errorMessage}" name="review">
                        <textarea
                            rows="5"
                            class="form-control my-2"
                            placeholder="Review"
                            v-bind="field"
                            :class="{'is-invalid': errors.length !== 0}"
                            >
                        </textarea>
                            <div class="input_alert"
                            v-if="errors.length !== 0">
                            {{ errorMessage }}
                            </div>
                    </Field>
                    <div class="d-flex my-3">
                        <base-button type="submit">Publish Review</base-button>
                    </div> 
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    const route = useRoute();
    const router = useRouter();

    import { Field, Form } from 'vee-validate';
    import * as yup from 'yup'

     // articles store
     import { useArticlesStore } from '@/stores/articles'
    const articlesStore = useArticlesStore()

    import { storeToRefs } from 'pinia'; 
    const { allArticles, reviews, reviewingItem, rview } = storeToRefs (articlesStore)

    // auth store
    import { useUserStore } from '@/stores/users'
    const userStore = useUserStore()

    const reviewOne = computed (() =>{
        return allArticles.value.find(item => item.title.toLowerCase().split(' ').join('-') == route.params.id)
    })

    const ratingArray = ref([1, 2, 3, 4, 5]);

    const submitReview = (values) => {
        reviews.value = {
            rate: values.rating,
            title: values.title,
            review: values.review
        }
        reviewOne.value.review.push(reviews.value);
        
        router.push({name: 'articlDetails'})
    }

    // const oneReviewedArticle = computed(() => {
    //     return newReviews.value = newReviews.value.filter(item => item == reviewingItem.value)
    // })

    const formSchemeDetails = yup.object({
        rating: yup.string()
        .required('Rating is required')
        .notOneOf(['Please select a rating'], 'You need to select a rating'),
        title: yup.string()
        .required('Title is required')
        .min(10, 'The title must be at least 10 characters')
        .max(30, 'The title must be max 30 characters'),
        review: yup.string()
        .required ('Review is required')
        .min(20, 'The review must be at least 20 characters')
    })
</script>

<style scoped>
     .circle {
        width: 53px;
        height: 53px;
        margin-right: 13px;
        border-radius: 50%;
    }
</style>