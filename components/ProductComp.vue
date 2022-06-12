<template>
  <section class="product">
    <ProductCardList>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductCardList>
  </section>
</template>

<script>
import ProductCardList from './ProductCardList.vue';
import ProductCard from './ProductCard.vue';
export default {
  name: "ProductComp",
  components: { ProductCardList, ProductCard }
}
</script>

<style lang="scss" scoped>
.product {
  max-width: 1028px;
}
</style>
