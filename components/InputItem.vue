<template>
  <label class="label">
    <p class="label__text" :class="{ 'label__text_required': required }">{{ label }}</p>
    <input :id="id" :name="id" :type="type" :placeholder="placeholder" :required="required" class="label__input"
      autocomplete="off" @keypress="isNumber($event)">
  </label>
</template>

<script>
export default {
  name: 'FormItem',
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
  methods: {
    isNumber(e) {
      if (this.id === "price") {
        const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const keyPressed = e.key;

        if (!keysAllowed.includes(keyPressed)) {
          e.preventDefault()
        }
      }
    }
  }
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

  &__input {
    font-size: .75rem;
    line-height: 1.25;
    text-align: left;
    color: #B4B4B4;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    border: none;
    height: 2.25rem;
    margin-top: .25rem;
    padding: 0 1rem;
    color: #3F3F3F;
  }
}
</style>
