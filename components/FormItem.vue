<template>
  <form :name="name" class="form">
    <button-item />
  </form>
</template>

<script>
import ButtonItem from './ButtonItem.vue'
export default {
  name: 'FormItem',
  components: { ButtonItem },
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
  border-radius: 4px;
  padding: 24px;
  width: 332px;
}
</style>
