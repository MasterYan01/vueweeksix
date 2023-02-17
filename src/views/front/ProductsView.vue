<template>

  <h1>產品列表</h1>
  <table class="table">
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td><img :src="product.imageUrl"  width='200' alt=""></td>
        <td>
            <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-secondary">產品細節</RouterLink>
            <button type="button" class="btn btn-outline-primary" @click="addToCart(product.id)">加入購物車</button>
        </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
// import axios from 'axios'
import { RouterLink } from 'vue-router'
const { VITE_API, VITE_APIPATH } = import.meta.env
export default {
  data () {
    return {
      products: []
    }
  },
  components: { RouterLink },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/products/all`)
        .then((res) => {
          console.log(res.data.products)
          this.products = res.data.products
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_API}/v2/api/${VITE_APIPATH}/cart`, { data })
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
