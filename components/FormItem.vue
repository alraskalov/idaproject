<template>
  <form :name="name" novalidate class="form">
    <InputItem id="name" label="Наименование товара" placeholder="Введите наименование товара" required />
    <TextAreaItem id="about" label="Описание товара" placeholder="Введите описание товара" />
    <InputItem id="url" type="url" label="Ссылка на изображение товара" placeholder="Введите ссылку" required />
    <InputItem id="price" label="Цена товара" placeholder="Введите цену" required />
    <ButtonItem />
  </form>
</template>

<script>

export default {
  name: 'FormItem',
  props: {
    name: {
      type: String,
      default: "form"
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
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: .25rem;
  padding: 1.5rem;
  max-width: 332px;
  width: 100%;
  height: 440px;
}
</style>
