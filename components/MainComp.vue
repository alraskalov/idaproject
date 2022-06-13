<template>
  <div class="page">
    <main class="content">
      <h2 class="content__title">Добавление товара</h2>
      <SelectItem id="card-sort" v-model="selectedSort" class="right" />
      <FormItem name="create" />
      <ProductComp />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "MainComp",
  computed: {
    ...mapState({
      selectedSort: (state) => state.selectedSort
    })
  },
  mounted() {
    if (localStorage.getItem('product')) {
      this.$store.commit('INITIAL_PRODUCT', JSON.parse(localStorage.getItem('product')));
    }
  },

}
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-gap: 1rem 1rem;
  grid-template-columns: 332px minmax(max-content, 1028px);
  grid-template-rows: auto auto;
  background: rgba(255, 254, 251, 0.8);
  text-rendering: optimizeLegibility;
  margin: 1rem;

  &__title {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.25;
    color: #3F3F3F;
    margin: 0;
    align-self: self-end;
  }
}

.page {
  margin: auto;
  max-width: 1440px;
  min-width: 320px;
  position: relative;
}

.right {
  justify-self: end;
}
</style>
