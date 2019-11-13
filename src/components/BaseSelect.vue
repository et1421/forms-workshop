<template>
  <div>
    <label :for="name">{{ label }}:
      <select
        v-bind="$attrs"
        v-on="$listeners"
        :id="name"
        :aria-describedby="`${name}-error`"
        :name="name"
      >
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
    </label>
    <p v-if="errorMessage" id="`${name}-error`">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  inheritAttrs: false,
  props: {
    value: [String],
    errorMessage: String,
    name: String,
    label: String,
    options: Array
  }
}
</script>
