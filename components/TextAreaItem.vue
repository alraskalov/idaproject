<template>
  <label class="label">
    <p class="label__text" :class="{ 'label__text_required': required }">{{ label }}</p>
    <textarea :id="id" :name="id" :type="type" :placeholder="placeholder" :required="required" class="label__textarea"
      autocomplete="off" />
  </label>
</template>

<script>
export default {
  name: 'TextAreaItem',
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    }
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
  font-size: .625rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #49485E;
  width: 100%;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 1.5rem;
  }

  &__text {
    margin: 0;
    max-width: 134px;

    &_required::after {
      content: "";
      width: .25rem;
      height: .25rem;
      background: #FF8484;
      border-radius: .25rem;
      position: absolute;
    }
  }

  &__textarea {
    font-size: .75rem;
    line-height: 1.25;
    text-align: left;
    color: #B4B4B4;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    border: none;
    margin-top: .25rem;
    padding: 0.625rem 1rem 0.625rem;
    color: #3F3F3F;
    height: 6.75rem;
    resize: none;
  }
}
</style>
