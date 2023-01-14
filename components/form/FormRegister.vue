<template>
  <AuthFirebase
      class="box px-5 py-5 mx-4"
      title="Register"
      :isLoading="isLoading"
      :message="message"
      @submit="register"
  />
</template>
<script setup>
const { isLoading, message, setMessage, loadingOff, loadingOn } = useLoading();

const register = async (data) => {
  loadingOn()
  try {
    const credentials = await createUser(
        data.email,
        data.password
    );
    loadingOff()
    if (credentials) {
      setMessage(`Successfully login: ${credentials.user.email}`)
    }
  }  catch (e) {
    setMessage(e)
  }
};
</script>

<style scoped>

</style>
