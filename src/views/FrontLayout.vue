<template>
  前台
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>｜
  <router-link to="/products">產品列表</router-link>｜
  <router-link to="/cart">購物車</router-link> |
  <router-link to="/admin/products">後台產品列表</router-link>

  <RouterView />
</template>
<script>
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView
  }
}
</script>
