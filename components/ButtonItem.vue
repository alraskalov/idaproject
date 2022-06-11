<template>
  <button class="button button_active">{{ title }}</button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    title: {
      type: String,
      default: 'Добавить товар',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: .75rem;
  line-height: 1.25;
  text-align: center;
  letter-spacing: -0.02em;
  color: #B4B4B4;
  background: #EEE;
  border-radius: .625rem;
  border: none;
  max-width: 284px;
  width: 100%;
  height: 36px;
  padding: 0;

  &_active {
    background: #7BAE73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .1);
    color: #FFFFFF;
    cursor: pointer;
    transition: opacity .5s linear;

    &:hover {
      opacity: .8;
    }
  }
}
</style>
