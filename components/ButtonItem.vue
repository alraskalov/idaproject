<template>
  <button class="button button_active" :type="type">{{ title }}</button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    title: {
      type: String,
      default: 'Добавить товар',
    },
    type: {
      type: String,
      default: 'submit',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.25;
  text-align: center;
  letter-spacing: -0.02em;
  color: #b4b4b4;
  background: #eee;
  border-radius: 0.625rem;
  border: none;
  max-width: 284px;
  width: 100%;
  height: 36px;
  padding: 0;

  &_active {
    background: #7bae73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    color: #ffffff;
    cursor: pointer;
    transition: opacity 0.5s linear;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
