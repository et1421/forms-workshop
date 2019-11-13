<template>
  <div>
    <label :for="name">{{ label }}:</label>
    <input
      v-bind="$attrs"
      :id="name"
      :aria-describedby="`${name}-error`"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @change="$emit('input', $event.target.value)"
    />

    <template v-if="hasErrors">
      <p class="error" v-for="error in errors" v-bind:key="error" id="`${name}-error`">{{ error }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    errors: Array,
    hasErrors: Boolean
  },
  data () {
    return {
      formattedValue: ''
    }
  }
}
</script>
<style scoped>
  .error {
    color: darkred;
  }
</style>
