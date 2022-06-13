export const state = () => ({
  products: [],
  selectedSort: '',
  sortOptions: {
    max: 'По возрастанию цены',
    min: 'По убыванию цены',
    name: 'По имени',
  },
})

export const getters = {
  sortedProduct(state) {
    switch (state.selectedSort) {
      case 'max':
        return [...state.products].sort((prev, next) => prev.price - next.price)
      case 'min':
        return [...state.products].sort((prev, next) => next.price - prev.price)
      case 'name':
        return [...state.products].sort((prev, next) =>
          prev[state.selectedSort].localeCompare(next[state.selectedSort])
        )
      default:
        return [...state.products]
    }
  },
}

export const mutations = {
  INITIAL_PRODUCT(state, product) {
    state.products = [...product]
  },
  SET_PRODUCT(state, product) {
    state.products = [...state.products, product]
    localStorage.setItem('product', JSON.stringify(state.products))
  },
  REMOVE_PRODUCT(state, product) {
    state.products = state.products.filter((p) => p.id !== product.id)
    localStorage.setItem('product', JSON.stringify(state.products))
  },
  SET_SELECTED_SORT(state, selectedSort) {
    state.selectedSort = selectedSort
  },
  MAX_SORT(state, selectedSort) {
    state.selectedSort = selectedSort
  },
}
