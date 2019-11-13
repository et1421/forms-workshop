<template>
  <div>
    <h1>Excersise 2</h1>
    <p>
      Adjust this form to make it accessible using the 5 basic principles.
      <ul>
        <li>Semantics</li>
        <li>Navigation</li>
        <li>Input State</li>
        <li>Labels</li>
        <li>Errors</li>
      </ul>
    </p>

    <div class="form">
      <div class="input">
        <input type="text" v-model="form.username" placeholder="Username" >
      </div>

      <div class="input">
        <input type="password" v-model="form.password" placeholder="Password" >
      </div>

      <p class="error">Sorry, that username/password is invalid</p>

      <div>
        <div class="btn" @click.prevent="login">Login</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: ''
      }
    }
  },
  methods: {
    login () {
      alert('You are logged in!')
    }
  }
}
</script>
