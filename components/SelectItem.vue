<template>
  <select :id="id" class="select" :name="id" @change="setSelectedSort">
    <option class="select__item" value="default" selected>По умолчанию</option>
    <option v-for="(value, name) in options" :key="name" class="select__item" :value="name">
      {{ value }}
    </option>
  </select>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SelectItem',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState({
      options: (state) => state.sortOptions,
    })
  },
  mounted() {
    this.$store.commit('SET_SELECTED_SORT', 'default')
  },
  methods: {
    setSelectedSort(e) {
      this.$store.commit('SET_SELECTED_SORT', e.target.value)
    }
  },

}
</script>

<style lang="scss" scoped>
.select {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  border: none;
  width: 121px;
  height: 36px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
