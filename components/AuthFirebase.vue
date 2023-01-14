<template>
  <form
    class="form"
    @submit.prevent="onSubmit"
  >
    <UiLoader v-if="isLoading"/>
    <h2 class="title is-4 has-text-black">
      {{ title }}
    </h2>
    <UiInput
      id="email"
      v-model="email"
      label="Email"
      placeholder="john@gmail.com"
      type="email"
      :error="emailError"
    />
    <UiInput
      id="Password"
      v-model="password"
      label="Password"
      placeholder="******"
      type="Password"
      :error="passwordError"
    />
    <UiButton type="submit">
      Submit
    </UiButton>
    <div class="form-message">
      {{message}}
    </div>
  </form>
</template>

<script setup>
import { useForm, useField } from "vee-validate";

defineProps({
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  isLoading: {
    type: Boolean,
    default: false
  },
});
const emit = defineEmits(['submit'])

const schema = {
  password: 'required|min:6',
  email: 'required|email',
}
// Create a form context with the validation schema
const {handleSubmit} = useForm({
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

const onSubmit = handleSubmit(() => {
  emit('submit', {
    password: password.value,
    email: email.value,
  })
}, onInvalidSubmit)
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-gap: 5px;
  position: relative;
  overflow: hidden;

  button {
    margin: 10px 0;
  }
}

.form-message {
  text-align: center;
}
</style>
