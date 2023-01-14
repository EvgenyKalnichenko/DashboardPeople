<template>
  <div class="container">
    <div class="container mt-6">
      <div class="column is-half is-offset-one-quarter">
        <AuthFirebase
          v-if="showRegisterForm"
          class="box px-5 py-5 mx-4"
          title="Register"
          :message="registerMessage"
          @submit="register"
        />
        <AuthFirebase
          v-if="!showRegisterForm"
          class="box px-5 py-5 mx-4"
          title="Sign in"
          @submit="signin"
        />
      </div>
      <div class="level">
        <div class="level-item has-text-centered">
          <UiButton @click="showRegisterForm = !showRegisterForm">
            {{ toggleButtonText }}
          </UiButton>
        </div>
      </div>
      <div class="level">
        <div class="level-item has-text-centered">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showRegisterForm = ref(false);
const message = ref('');

const toggleButtonText = computed(() => {
  return showRegisterForm.value ? "Sign in" : "Register";
});

const signin = async (data) => {
  await signInUser(data.email, data.password);
};

const register = async (data) => {
  const credentials = await createUser(
      data.email,
      data.password
  );

  if (credentials) {
    message.value = `Successfully registered: ${credentials.user.email}`;
    setTimeout(() => {
      message.value = "";
    }, 3000);
  }
};
</script>

<style scoped>

</style>
