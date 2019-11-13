<template>
  <div>
    <input
      v-bind="$attrs"
      v-on="$listeners"
      :id="name"
      :aria-describedby="`${name}-error`"
      :name="name"
      type="radio"
    />
    <label :for="name">{{ label }}:</label>
  </div>
</template>

<script>
export default {
  name: 'BaseRadio',
  inheritAttrs: false,
  props: {
    value: [String, Number],
    errorMessage: String,
    name: String,
    label: String
  }
}
</script>
