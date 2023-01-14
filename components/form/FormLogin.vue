<template>
  <AuthFirebase
    class="box px-5 py-5 mx-4"
    title="Sign in"
    :is-loading="isLoading"
    :message="message"
    @submit="signIn"
  />
</template>

<script setup>
const { isLoading, message, setMessage, loadingOff, loadingOn } = useLoading();

const signIn = async (data) => {
  loadingOn();
  try {
    const credentials = await signInUser(data.email, data.password);
    loadingOff()
    if (credentials) {
      setMessage(`Successfully login: ${credentials.user.email}`);
    }
  } catch (e) {
    setMessage(e);
  }
};
</script>

<style scoped>

</style>
