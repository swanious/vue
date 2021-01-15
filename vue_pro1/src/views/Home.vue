<template>
  <div class="home">
    <h1>INDEX PAGE</h1>
    <input v-model="inputText" type="text">
    <p>{{ inputText }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => {
    return {
      inputText : ""
    }
  }
}
</script>
