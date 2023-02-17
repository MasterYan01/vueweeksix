<template>
    單項產品
    <h2>{{ product.title }}</h2>
    <img :src="product.imageUrl" class="img-fluid" alt="">
</template>
<script>
const { VITE_API, VITE_APIPATH } = import.meta.env
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      console.log(this.$route.params)
      const { id } = this.$route.params
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/product/${id}`)
        .then(res => {
          console.log(res.data.product)
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
