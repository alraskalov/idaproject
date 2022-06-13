<template>
  <section class="product">
    <ProductCardList v-if="$store.getters.sortedProduct.length > 0">
      <ProductCard
        v-for="product in $store.getters.sortedProduct"
        :key="product.id"
        :product="product"
        @remove="deleteCard"
      />
    </ProductCardList>
    <p v-else class="product__text">Товаров нет</p>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ProductCardList from './ProductCardList.vue'
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductComp',
  components: { ProductCardList, ProductCard },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
  methods: {
    deleteCard(product) {
      this.$store.commit('REMOVE_PRODUCT', product)
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  max-width: 1028px;

  &__text {
    text-align: center;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.25;
    color: #3f3f3f;
    margin: 0;
  }
}
</style>
