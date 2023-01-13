<template>
  <div class="container">
    <div v-if="firebaseUser">
      <client-only>
        <pre>{{ firebaseUser }}</pre>
        <br>
        <button @click="getToken()">
          Получить токен
        </button>
      </client-only>
    </div>
    <div v-else>
      User is signed out
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const firebaseUser = useFirebaseUser();

const getToken = () => {
  getIdToken()
}
</script>

<style></style>
