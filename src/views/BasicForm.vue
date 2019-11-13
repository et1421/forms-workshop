<template>
  <div>
    <h1>Excersise 1</h1>
    <p>Transform the inputs in this form into reusable components that are capable of being v-modeled</p>

  <form @submit.prevent="submit">
    <BaseInput
      v-model="$v.form.firstName.$model"
      label="First name"
      name="firstName"
      type="text"
      required
      :has-errors="$v.form.firstName.$error"
      :errors="[!$v.form.firstName.required ? 'This field is required' : '']"
    />
    <BaseInput
      v-model="$v.form.lastName.$model"
      label="Last name"
      name="lastName"
      type="text"
    />
    <BaseInput
      v-model="$v.form.email.$model"
      aria-label="Email field"
      type="email"
      label="Email"
      name="email"
      :has-errors="$v.form.email.$error"
      :errors="[!$v.form.email.email ? `${form.email} seems to be an invalid email` : '']"
    />

    <BaseInput
      v-model="$v.form.age.$model"
      type="number"
      label="Your age"
      name="age"
      :has-errors="$v.form.age.$error"
      :errors="[!$v.form.age.age ? `${form.age} too young` : '']"
    />

    <!-- VUEX -->
<!--    <BaseInput :value="form.email" @input="updateForm('email', $event.target.value)" />-->
    <!-- VUEX -->

    <BaseRadioGroup name="noms" :radio-list="radioList" legend="Nom preference" />

    <BaseSelect
      label="Favorite Vue library"
      name="library"
      :options="options"
    />

    <label>
      <input type="checkbox" name="spam" />
      <span>I'd like spam in my mailbox</span>
    </label>

    <label>
      <input type="checkbox" name="tos" />
      <span>I agree to the TOS</span>
    </label>

    <button type="submit">Submit</button>
  </form>
  </div>
</template>

<script>
import { required, email, minValue } from 'vuelidate/lib/validators'

import BaseInput from '@/components/BaseInput.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import BaseSelect from '@/components/BaseSelect.vue'

export default {
  components: {
    BaseInput,
    BaseRadioGroup,
    BaseSelect
  },
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: 'test@test.com',
        age: 0
      },
      options: [
        { value: 'vuelidate', label: 'Vuelidate' },
        { value: 'vuex', label: 'Vuex' },
        { value: 'formvuelatte', label: 'FormVueLatte' },
        { value: 'v-mask', label: 'v-mask' },
        { value: 'veelidate', label: 'Veelidate' }
      ],
      radioList: [
        { value: 'avocado', label: 'Avocado' },
        { value: 'pie', label: 'Pie' }
      ]
    }
  },
  methods: {
    submit () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        alert('Submitting form')
      }
    },
    updateForm (input, value) {
      this.$store.dispatch('updateForm',
        { input, value }
      )
    }
  },
  validations () {
    // dynamic validation rules
    return {
      form: {
        firstName: { required },
        lastName: { },
        email: { email },
        age: {
          minValue: minValue(18)
        }
      }
    }
  }
}
</script>

<style scoped>
  /deep/ form label {
    display: block;
  }

  /deep/ label input:not([type="checkbox"]):not([type="radio"]) {
    display: block;
  }
</style>
