<template>
  <label class="label">
    <p class="label__text" :class="{ label__text_required: required }">
      {{ label }}
    </p>
    <textarea
      :id="id"
      :name="id"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      class="label__textarea"
      autocomplete="off"
      @input="$emit('on-change', $event)"
    />
  </label>
</template>

<script>
export default {
  name: 'TextAreaItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.label {
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #49485e;
  width: 100%;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 1.5rem;
  }

  &__text {
    margin: 0;
    max-width: 134px;

    &_required::after {
      content: '';
      width: 0.25rem;
      height: 0.25rem;
      background: #ff8484;
      border-radius: 0.25rem;
      position: absolute;
    }
  }

  &__textarea {
    font-size: 0.75rem;
    line-height: 1.25;
    text-align: left;
    color: #b4b4b4;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    border: none;
    margin-top: 0.25rem;
    padding: 0.625rem 1rem 0.625rem;
    color: #3f3f3f;
    height: 6.75rem;
    resize: none;
    box-sizing: border-box;
  }
}
</style>
