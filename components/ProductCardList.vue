<template>
  <div class="card-list">
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

.product-card {
  display: flex;
  flex-direction: column;
  width: 332px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: .25rem;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  color: #3F3F3F;
  cursor: pointer;

  &__img {
    max-width: 332px;
    height: 200px;
    object-fit: cover;
  }
}

.description {
  box-sizing: border-box;
  padding: 1rem 1rem 1.5rem;

  &__title {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.25;
    margin: 0;
  }

  &__text {
    margin: 1rem 0 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &__price {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.25;
    margin: 0;
  }
}
</style>
