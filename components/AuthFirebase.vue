<template>
  <form @submit.prevent="onSubmit" class="form">
    <h2 class="title is-4 has-text-black">
      {{ title }}
    </h2>
    <UiInput
        label="Email"
        id="email"
        v-model="email"
        placeholder="john@gmail.com"
        type="email"
        :error="emailError"
    />
    <UiInput
        label="Password"
        id="Password"
        v-model="password"
        placeholder="******"
        type="Password"
        :error="passwordError"
    />
    <UiButton type="submit">
      Submit
    </UiButton>
  </form>
</template>

<script setup>
import { useForm, useField } from "vee-validate";

defineProps({
  form: Object,
  title: String,
  message: String
});
const emit = defineEmits(['submit'])

const schema = {
  password: 'required|min:6',
  email: 'required|email',
}
// Create a form context with the validation schema
const {handleSubmit, isSubmitting} = useForm({
  validationSchema: schema,
})

// No need to define rules for fields
const {value: password, errorMessage: passwordError} = useField('password')
const {value: email, errorMessage: emailError} = useField('email')

function onInvalidSubmit({ errors }) {
  if (!Object.keys(errors).length) {
    return false
  }
}

const onSubmit = handleSubmit(values => {
  emit('submit', {
    password: password.value,
    email: email.value,
  })
}, onInvalidSubmit)

const handlerSubmit = (e) => {
  emit('submit', {
    email: email.value,
    password: password.value
  })
}
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-gap: 5px;

  button {
    margin: 10px 0;
  }
}
</style>
