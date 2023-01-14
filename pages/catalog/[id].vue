<template>
  <div class="container">
    <h1>
      {{ data.Title }}
    </h1>
    <div class="people-detail">
      <CardPeople
        :people="data"
      />
    </div>
    <code>
      {{ data }}
    </code>
    <div>
      <button @click="testPostReq">
        testPostReq
      </button>
    </div>
  </div>
</template>

<script setup>
import CardPeople from "../../components/card/CardPeople";
const route = useRoute()
const id = route.params.id

const { data } = await useAsyncData(
    `mountains-${id}`,
    () => $fetch(`https://interview-api-luvkm7etwa-uc.a.run.app/people/${id}`)
)

const firebaseUser = useFirebaseUser();

const testPostReq = () => {
  $fetch('https://interview-api-luvkm7etwa-uc.a.run.app/people/FpqbSZIGpHly', {
    method: "post",
    headers: {
      'X-Auth-Token': `${firebaseUser.value.accessToken}`,
    }
  })
}

</script>

<style lang="scss" scoped>
.people-detail {
  margin: 40px 0;
  display: flex;
  justify-content: center;

  & > * {
    width: 320px;
  }
}
</style>
