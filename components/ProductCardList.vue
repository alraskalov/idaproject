<template>
  <div class="card-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ProductCardList',
}
</script>

<style lang="scss" scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 332px);
  grid-gap: 1rem 1rem;
  width: 100%;
  justify-content: center;
}
</style>
