<template>
  <div class="product-card">
    <img class="product-card__img"
      src="https://images.unsplash.com/photo-1654875659141-bc9310224933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80"
      alt="Pic">
    <div class="product-card__description description">
      <h2 class="description__title">Наименование товара</h2>
      <p class="description__text">Довольно-таки интересное описание товара в несколько строк. Довольно-таки
        интересное описание товара в несколько строк</p>
      <p class="description__price">10 000 руб.</p>
    </div>
    <button class="product-card__btn-del"></button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
}
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
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
  cursor: url('~/assets/image/cursor.svg') 2 2, pointer;

  &__img {
    border-top-right-radius: .25rem;
    border-top-left-radius: .25rem;
    max-width: 332px;
    height: 200px;
    object-fit: cover;
  }

  &:hover &__btn-del {
    visibility: visible;
    opacity: 1;
  }

  &__btn-del {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity .5s linear;
    position: absolute;
    right: -8px;
    top: -8px;
    padding: 0;
    background-image: url('~/assets/image/trash.svg');
    background-repeat: no-repeat;
    background-position: center center;
    width: 2rem;
    height: 2rem;
    background-color: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: .625rem;
    border: none;
    cursor: url('~/assets/image/cursor.svg') 2 2, pointer;
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
