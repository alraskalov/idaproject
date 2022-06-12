<template>
  <select :id="id" class="select" :name="id">
    <option class="select__item" value="default" selected>По умолчанию</option>
    <option v-for="value in object" :key="value" class="select__item" :value="object[value]">
      {{ value }}</option>
    <!-- <option class="select__item" value="">По убыванию цены</option>
    <option class="select__item" value="">По имени</option> -->
  </select>
</template>

<script>
export default {
  name: 'SelectItem',
  props: {
    id: {
      type: String,
      default: ""
    },
    object: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.select {
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  border: none;
  width: 121px;
  height: 36px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
