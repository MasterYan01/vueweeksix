<template>
    這是登入頁面

    <form id="form" class="form-signin" @submit.prevent="login">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="username" placeholder="name@example.com"
                                required autofocus v-model="user.username">
                            <label for="username">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" v-model="user.password" class="form-control" id="password"
                                placeholder="Password" required>
                            <label for="password">Password</label>
                        </div>
                        <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                            登入
                        </button>
                    </form>
</template>
<script>
import axios from 'axios'
const { VITE_API } = import.meta.env
export default {
  data () {
    return {

      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios.post(`${VITE_API}/v2/admin/signin`, this.user)
        .then(res => {
          const { token, expired } = res.data // 解構axios回傳的token，expired
          //   console.log(token, expired)
          // 把token及到期日儲存在cookie
          document.cookie = `masterToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch(error => {
          console.log(error.data)
        })
    }
  }

}
</script>
