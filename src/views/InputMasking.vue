<template>
  <div>
    <label>
      Telephone:
      <input type="text" v-mask="'###-##-##'" v-model="form.telephone">
    </label>

    <label>
      Credit Card:
      <input type="text" v-mask="'####-####-####-####'" v-model="form.cc">
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        telphone: '',
        cc: ''
      }
    }
  }
}
</script>
