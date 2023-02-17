<template>
  <h1>購物車</h1>
  <table class="table align-middle">
                    <thead>
                        <tr>
                            <th></th>
                            <th>品名</th>
                            <th style="width: 150px">數量/單位</th>
                            <th>單價</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="cart.carts">
                            <tr v-for="item in cart.carts" :key="item.id">
                                <td>
                                    <button type="button" class="btn btn-outline-danger btn-sm"
                                        @click="deleteItem(item)">
                                        <i class="fas fa-spinner fa-pulse"></i>
                                        x
                                    </button>
                                </td>
                                <td>
                                    {{ item.product.title}}

                                </td>
                                <td>
                                    <div class="input-group input-group-sm">
                                        <select name="" id="" class="form-select" v-model="item.qty"
                                            @change="updateCartItem(item)">
                                            <option :value="i" v-for="i in 20" :key="i+1235">{{i}}</option>
                                        </select>
                                    </div>
                                </td>
                                <td class="text-end">

                                    {{ item.total}}
                                </td>
                            </tr>
                        </template>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-end">總計</td>
                            <td class="text-end">{{ cart.total}}</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="text-end text-success">折扣價</td>
                            <td class="text-end text-success">{{cart.final_total }}</td>
                        </tr>
                    </tfoot>
                </table>
</template>
<script>
const { VITE_API, VITE_APIPATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: {},
      user: {}
    }
  },
  methods: {
    openModal (id) {
      this.productId = id
      // console.log('外層', id)
    },

    getCarts () {
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/cart`).then((res) => {
        // console.log('購物車', res.data);
        this.cart = res.data.data
      })
    },
    updateCartItem (item) {
      // 購物車id 產品id
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }

      this.$http
        .put(`${VITE_API}/v2/api/${VITE_APIPATH}/cart/${item.id}`, { data })
        .then((res) => {
          // console.log('更新購物車', res.data);
          this.getCarts()
        })
    },
    deleteItem (item) {
      this.$http
        .delete(`${VITE_API}/v2/api/${VITE_APIPATH}/cart/${item.id}`)
        .then((res) => {
          // console.log('刪除購物車', res.data);
          this.getCarts()
        })
    },
    onSubmit () {
      alert('送出成功')
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
