<template>
  <div class="container">
    <div class="page-auth">
      <FormRegister v-if="showRegisterForm"/>
      <FormLogin v-else/>
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
.page-auth {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 30px 0;
}
</style>
