<template>
  後台
  <router-link to="/admin/products">後台產品列表</router-link> |
  <router-link to="/admin/orders">後台訂單列表</router-link> |
  <router-link to="/">回前台</router-link> |
  <a href="#" @click.prevent="logout">登出</a>
  <hr />
  <RouterView />
</template>
<script>
import { RouterView } from 'vue-router'
const { VITE_API } = import.meta.env
export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = 'masterToken=; expires=;'
      this.$router.push('/login')
    },
    checkAdmin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)masterToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http.post(`${VITE_API}api/user/check`)
        .then((res) => {
          console.log(res.data)
          if (res.data.success === false) {
            this.$router.push('/login')
          }
        })
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
