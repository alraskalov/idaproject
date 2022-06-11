<template>
  <section class="product">
    <ProductCardList>
    
    </ProductCardList>
  </section>
</template>

<script>
import ProductCardList from './ProductCardList.vue';
export default {
    name: "ProductComp",
    components: { ProductCardList }
}
</script>

<style lang="scss" scoped>
.product {
  max-width: 1028px;
}
</style>
