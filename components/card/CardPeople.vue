<template>
  <div
    :id="people.Id"
    class="card"
  >
    <div class="card__top">
      <div class="card__tags">
        <CardPeopleLabel
          v-for="(label, index) in people.Tags"
          :key="`${people.Id}-${index}`"
          :color="`${label.Color}`"
        >
          {{ label.Name }}
        </CardPeopleLabel>
      </div>
      <div class="card__image">
        <img
          :src="people.Photo"
          alt=""
        >
      </div>
    </div>
    <div class="card__bottom">
      <NuxtLink
        :to="`/catalog/${people.Id}`"
        class="card__title"
      >
        {{ people.Title }}
      </NuxtLink>
      <div class="card__name">
        {{ people.Name }}
      </div>
      <hr>
      <div class="card__Profit">
        <CardPeopleRow
          name="Profit"
          :value="`$${people.Profit[0].Amount}`"
        />
        <CardPeopleLineIndicator :value="[{ color: '3AAAAE', percent: 48 }]" />
      </div>
      <div class="card__attention">
        <CardPeopleAttention :content="people.Attention" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  people: {
    type: Object,
    default: () => {}
  },
})
</script>

<style lang="scss" scoped>
.card {
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;

  &__top {
    position: relative;

    &:before{
      padding-top: 90%;
      display: block;
      position: relative;
      content: '';
    }
  }

  &__bottom {
    padding: 10px;

    hr {
      margin: 10px 0;
    }
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  &__title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  &__name {
    font-size: 20px;
  }

  &__tags {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1;
    padding: 5px;
  }
}
</style>
