<template>
    <main class="w-full mx-auto">
        <div class="container mx-auto p-4 md:p-6 w-full sm:w-2/3">
            <h1
                class="text-2xl lg:text-4xl font-bold text-gray-800 mb-6 text-center"
            >
                Password Recovery
            </h1>

            <!-- Message -->
            <AlertMessage
                v-if="showAlert"
                :variant="success"
                :message="alertMessage"
                @close="showAlert = false"
            />

            <!-- Form -->
            <form @submit.prevent="onSubmit">
                <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Email
                </label>
                <FormInput
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    class="mb-3"
                    v-bind="emailProps"
                    :error-message="errors['email']"
                />

                <!-- Submit Button -->
                <div class="flex justify-center">
                    <FormSubmitButton
                        text="Send"
                        type="submit"
                        variant="primary"
                        @click="onSubmit"
                    />
                </div>
            </form>
        </div>
    </main>
</template>

<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'

useHead({
    title: 'Forgot Password',
})

const showAlert = ref(false)
const alertVariant = ref('')
const alertMessage = ref('')

const validationSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .email('Email must be a valid email'),
})

// Setup VeeValidate
const { handleSubmit, defineField, errors } = useForm({
    validationSchema,
})

// Define fields using defineField
const [email, emailProps] = defineField('email')

const onSubmit = handleSubmit(async (values) => {
    console.log(values)
    showAlert.value = false
    alertVariant.value = 'success'
    alertMessage.value = 'We sent Temporary password via your email address'
    showAlert.value = true
})
</script>
