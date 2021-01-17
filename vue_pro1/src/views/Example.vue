<template>
  <div id="example">
    <div>
      <h3>메시지 뒤집기</h3>
      <p>{{ message }}</p>
      <p>{{ reversedMessage }}</p>
      <p>{{ message.split('').reverse().join('') }}</p>
    </div>
    <hr>
    
    <div id="watch__example">
      <h3>watch 연습하기</h3>
      <p>
        yes/no 질문을 물어보세요:
        <input v-model="question" type="text">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>


<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  data: () => {
    return {
      message: '안녕하세요.',
      question: '',
      answer: '질문을 하기 전까지 대답할 수 없습니다.',
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)

  },
  watch: {
    question: function() {
      this.answer = '입력을 기다리는중.'
      this.debouncedGetAnswer()
    }
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf('?') === -1) {
        console.log(this.question.indexOf('?'))
        this.answer = '물음표로 끝나는 질문을 해주세요.'
        return
      } else if (this.question.length === 1 || this.question.indexOf('?') === 0) {
        this.answer = '질문을 완성해주세요.'
        return
      }
      console.log(this.question.length)

      this.answer = '생각중.'
      let vm = this
      // Api 통신
      axios.get('https://yesno.wtf/api')
        // 성공 시 Yes/No
        .then(res => {
          console.log(res)
          vm.answer = _.capitalize(res.data.answer)
        })
        // 실패 시 에러메시지(실패할 경우는 API요청 오류밖에 없음)
        .catch(err => {
          console.log(err)
          vm.answer = '에러! API요청에 오류가 있습니다.'
        })
    }
  }

}
</script>

<style>

</style>