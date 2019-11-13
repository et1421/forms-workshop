<template>
  <fieldset>
    <legend :for="name">{{ legend }}:</legend>
    <BaseRadio v-for="option in options" :key="option.value" :value="option.value" :label="option.label" />
    <p v-if="errorMessage" id="`${name}-error`">{{ errorMessage }}</p>
  </fieldset>
</template>

<script>
import BaseRadio from '@/components/BaseRadio.vue'

export default {
  name: 'BaseRadioGroup',
  inheritAttrs: false,
  components: { BaseRadio },
  props: {
    value: [String, Number],
    errorMessage: String,
    name: String,
    legend: String,
    options: Array
  }
}
</script>
