<template>
  <header class="header">
    <div class="header__container container">
      <nav>
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink to="/secret">
          Profile
        </NuxtLink>
        <NuxtLink to="/login">
          Login
        </NuxtLink>
      </nav>
      <div
        v-if="firebaseUser"
        class="header__right"
      >
        <div class="header__user">
          {{ firebaseUser.email }}
        </div>
        <UiButton
            v-if="firebaseUser"
            @click="signOut"
        >
          Sign out
        </UiButton>
      </div>
    </div>
  </header>
</template>

<script setup>
const firebaseUser = useFirebaseUser();

const signOut = async () => {
  await signOutUser();
};
</script>

<style lang="scss" scoped>
.header {
  background: #fff;

  &__right {
    display: flex;
    align-items: center;
    gap: 20px;

    @include sm-screen {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__container {
    display: flex;
    min-height: 50px;
    align-items: center;
    justify-content: space-between;
  }
}
nav {
  display: flex;
  gap: 15px;
  @include sm-screen {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
