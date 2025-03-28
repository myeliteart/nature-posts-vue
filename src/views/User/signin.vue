<template>
    <div class="signin_container">

        <!--loader -->
        
        <Form @submit="onSubmit" @keyup.enter="onSubmit" :validation-schema="formScheme">
            <!-- <h1 v-text="!type ? 'Sign In' : 'Register'"></h1>  -->
            <h1 v-text="'Sign In'"></h1>
            
           <div class="form-group">
                <Field name="firstName" v-slot="{field, errors, errorMessage}">
                    <input type="text" 
                    class="form-control"
                    placeholder="First name"
                    v-bind="field"
                    :class="{'is-invalid': errors.length !== 0}"
                    >
                    <div class="input_alert"
                    v-if="errors.length !== 0"
                    >
                    {{  errorMessage }}
                    </div>
                </Field>
                <Field name="lastName" v-slot="{field, errors, errorMessage}">
                    <input type="text" 
                    class="form-control"
                    placeholder="Last name"
                    v-bind="field"
                    :class="{'is-invalid': errors.length !== 0}"
                    >
                    <div class="input_alert"
                        v-if="errors.length !== 0">
                        {{  errorMessage }}
                    </div>
                </Field>
                <Field name="email" v-slot="{field, errors, errorMessage}">
                    <input type="text" 
                    class="form-control"
                    placeholder="Enter you email"
                    v-bind="field"
                    :class="{'is-invalid': errors.length !== 0}"
                    >
                    <div class="input_alert"
                    v-if="errors.length !== 0"
                    >
                    {{ errorMessage }}
                    </div>
                </Field>
                <Field name="password" 
                    v-slot="{field, errors, errorMessage}"
                    >
                    <input type="password"
                    class="form-control"
                    placeholder="Enter you password"
                    v-bind="field"
                    :class="{'is-invalid': errors.length !== 0}"
                    >
                    <div class="input_alert"
                    v-if="errors.length !== 0"
                    >
                    {{ errorMessage }}
                    </div>
                </Field>
                <Field name="confirm" 
                    v-slot="{field, errors, errorMessage}"
                    >
                    <input type="password"
                    class="form-control"
                    placeholder="Confirm you password"
                    v-bind="field"
                    :class="{'is-invalid': errors.length !== 0}"
                    >
                    <div class="input_alert"
                    v-if="errors.length !== 0"
                    >
                    {{ errorMessage }}
                    </div>
                </Field>
           </div>
           <base-button type="submit" class="btn btn-block mb-3" v-text="'Sign In'"></base-button>
           <!-- <base-button type="submit" class="btn btn-block mb-3" v-text="!type ? 'Sign In' : 'Register'"></base-button> -->

           <!-- <div class="form_swap" @click="type = !type">
                <span v-if="type">
                    i want to <b>Sign In</b>
                </span>
                <span v-else>
                    i want to <b>Register</b>
                </span>
           </div> -->
        </Form>
    </div>
</template>

<script setup>
    
    import { useRouter } from 'vue-router';
    const router = useRouter();

    import { Field, Form } from 'vee-validate';
    import * as yup from 'yup'
    import { ref } from 'vue';

    const type = ref(false);


    // auth store
    import { useUserStore } from '@/stores/users'
    const userStore = useUserStore()


    const formScheme = yup.object({
        firstName: yup.string()
        .required('First name is required'),
        lastName: yup.string()
        .required('Last name is required'),
        email: yup.string()
        .required('The email is required')
        .email('Not a valid email'),
        password: yup.string()
        .required('The password is required')
        .min(5, 'Password must be 5 characters long')
        // .matches(/[0-9]/, 'Password requires a number')
        // .matches(/[a-z]/, 'Password requires a lowercase letter')
        // .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
        confirm: yup.string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password'), null], 'Password Must match')
        })

    const onSubmit = (values)=>{
        router.push('/user/dashboard')
        userStore.vee = {
            first: values.firstName,
            last: values.lastName,
            email: values.email
        }
        userStore.auth = false;
        // if(type.value) {
        //     // userStore.register(values)
        //     router.push({name: 'dashboard'})
        //     userStore.auth = false
        // } else {
        //     // sign in
        // }
    }
    console.log(userStore.vee)
</script>

