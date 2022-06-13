<template>
  <form :name="name" class="form" @submit="handleSubmit">
    <InputItem id="name" label="Наименование товара" placeholder="Введите наименование товара" :value="values.name"
      required @on-change="handleChange" />
    <TextAreaItem id="about" label="Описание товара" placeholder="Введите описание товара" :value="values.about"
      @on-change="handleChange" />
    <InputItem id="url" type="url" label="Ссылка на изображение товара" placeholder="Введите ссылку" :value="values.url"
      required @on-change="handleChange" />
    <InputItem id="price" label="Цена товара" placeholder="Введите цену" :value="values.price" required
      @on-change="handleChange" />
    <ButtonItem />
  </form>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    name: {
      type: String,
      default: 'form',
    },
  },
  data() {
    return {
      values: { name: '', about: '', url: '', price: '' },
    }
  },

  methods: {
    handleChange(e) {
      const { name, value } = e.target
      this.values = { ...this.values, [name]: value }
    },
    handleSubmit(e) {
      e.preventDefault();
      const { name, about, url, price } = this.values
      const modifyName = name.charAt(0).toUpperCase() + name.slice(1);
      const newProduct = { id: Date.now(), name: modifyName, about, url, price: this.maskNumber(price) }
      this.$store.commit('SET_PRODUCT', newProduct)
      this.values = { name: '', about: '', url: '', price: '' }
    },
    maskNumber(number) {
      return number.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 0.25rem;
  padding: 1.5rem;
  max-width: 332px;
  width: 100%;
  height: 440px;
}
</style>
