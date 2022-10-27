<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default ({
  name: 'LoginPage',
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await useAsyncData('/local', () =>
          $fetch('/api/login', { params: this.login, })
        )
        console.log(response)

        this.$router.push('/home')
      } catch (err) {
        console.log(err)
      }
    },
  },
})
</script>
∏
