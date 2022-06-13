<template>
  <div class="page">
    <main class="content">
      <h2 class="content__title left">Добавление товара</h2>
      <SelectItem id="card-sort" v-model="selectedSort" class="right" />
      <FormItem class="form" name="create" />
      <ProductComp class="product" />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainComp',
  computed: {
    ...mapState({
      selectedSort: (state) => state.selectedSort,
    }),
  },
  mounted() {
    if (localStorage.getItem('product')) {
      this.$store.commit(
        'INITIAL_PRODUCT',
        JSON.parse(localStorage.getItem('product'))
      )
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
    color: #3f3f3f;
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

@media screen and (max-width: 750px) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .left {
    order: 1;
  }

  .form {
    order: 2;
  }

  .right {
    order: 3;
  }

  .product {
    order: 4;
  }

  .content {
    &__title {
      align-self: center;
    }
  }
}
</style>
