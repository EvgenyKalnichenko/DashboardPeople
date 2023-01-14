<template>
  <div class="container">
    <div class="container mt-6">
      <div class="column is-half is-offset-one-quarter">
        <FormRegister v-if="showRegisterForm" />
        <FormLogin v-else />
      </div>
      <div class="level">
        <div class="level-item has-text-centered">
          <UiButton @click="showRegisterForm = !showRegisterForm">
            {{ toggleButtonText }}
          </UiButton>
        </div>
      </div>
      <div class="form-message">
        <span>{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const showRegisterForm = ref(false);

const toggleButtonText = computed(() => {
  return showRegisterForm.value ? "Sign in" : "Register";
});
</script>

<style scoped>

</style>
