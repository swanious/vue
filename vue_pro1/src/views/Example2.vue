<template>
  <div>
    <div id="reverse__message">
      <h1>reverse message</h1>
      <p>{{ message }}</p>
      <button @click="getReversed">get Reversed !</button>
    </div>
    <hr>
    <div id="toggle">
      <h1>활성화 / 비활성화</h1>
      <input v-model="msg" type="text">
      <p>{{ msg }}</p>
      <p>{{ answer }}</p>
      <!-- <button @click="checkCode">check</button> -->
      <button @click="checkCode">check</button>
      <button @click="goToNextPage" :class="{ disabled: isActive }">go to the next</button>
    </div>
  </div>

</template>

<script>
export default {
  data: () => {
    return {
      message: "거꾸로 돌려주세요 !!",
      msg: "",
      answer: "비활성화 상태입니다. 비밀 코드를 입력해주세요.",
      isActive: true,
    }
  },
  created: function() {
    this.checkCode
  },
  methods: {
    getReversed: function() {
      this.message = this.message.split('').reverse().join('');
      return this.message
    },
    checkCode: function() {
      const input = document.querySelector('input')
      console.log(input.dataset.value)
      console.log(this.isActive)
      console.log(this.msg)
      if (this.msg === 'Activate') {
        this.isActive = false
        this.answer = '정답입니다. 우측 버튼을 클릭해 다음 페이지로 이동하세요.'
      } else {
        this.answer = '틀렸습니다.'
        return
      }
    },
    goToNextPage: function() {
      if (this.isActive === false) {

        this.$router.push('/example3')
      }
    }
  }
}
</script>

<style>

</style>