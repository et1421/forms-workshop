<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/input-masking">Input Masking Example</router-link>

      <br />
      <router-link to="/basic-form">Basic Form</router-link> |
      <router-link to="/accessibility">Accessibility</router-link> |
      <router-link to="/validation">Validation DIY</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1 + p {
  margin-bottom: 4rem;
  border-bottom: 1px solid black;
}

form, .form {
  width: 450px;
  margin: 0 auto;
}

.input {
    margin-bottom: .5rem;

    input {
      width: 100%;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    span {
      display: block;
      font-weight: bold;
    }
  }

  .btn {
    border-radius: 5px;
    background-color: #0099CC;
    padding: .5rem 1rem;
    display: inline-block;
    color: white;
    font-weight: bold;
  }

  .error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
  }
</style>
