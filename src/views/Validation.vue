<template>
  <div>
    <h1>Excersise 3</h1>
      <p>
        Validate this form using the DIY method. The "Name" input should be at least 5 characters in length, and the age should be at least 18+ before the submit button activates.
      </p>
    <form>
      <div class="input">
        <label for="name">Name</label>
        <input aria-labelledby="name-error" type="text" name="name" id="name" >
        <p id="name-error" class="error">The Name field should be at least 5 characters in length</p>
      </div>

      <div class="input">
        <label for="age">Age</label>
        <input aria-labelledby="age-error" type="number" age="age" id="age" >
        <p id="age-error" class="error">You must be at least 18 years old</p>
      </div>

      <button class="btn">Submit</button>
    </form>
  </div>
</template>
