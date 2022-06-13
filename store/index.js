export const state = () => ({
  products: [],
  selectedSort: '',
  sortOptions: [
    { max: 'По возрастанию цены' },
    { min: 'По убыванию цены' },
    { name: 'По имени' },
  ],
})

export const mutations = {
  INITIAL_PRODUCT(state, product) {
    console.log(product);
    state.products = [...product]
  },
  SET_PRODUCT(state, product) {
    state.products = [product, ...state.products]
    localStorage.setItem('product', JSON.stringify(state.products))
  },
  REMOVE_PRODUCT(state, product) {
    state.products = state.products.filter((p) => p.id !== product.id)
    localStorage.setItem('product', JSON.stringify(state.products))
  },
}
