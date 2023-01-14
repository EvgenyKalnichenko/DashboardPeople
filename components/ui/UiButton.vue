<template>
  <button
    class="btn"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: () => ''
  },
  type: {
    type: String,
    default: () => 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
})

</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: #fff;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 50%);
  }
}
</style>
