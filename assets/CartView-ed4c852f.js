import{_ as f,o as l,c,e as t,F as r,f as _,g,t as n,a as m,h as x,v as I}from"./index-ce32c5f0.js";const{VITE_API:u,VITE_APIPATH:i}={VITE_API:"https://vue3-course-api.hexschool.io/",VITE_APIPATH:"master1386",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},v={data(){return{products:[],productId:"",cart:{},user:{}}},methods:{openModal(e){this.productId=e},getCarts(){this.$http.get(`${u}/v2/api/${i}/cart`).then(e=>{this.cart=e.data.data})},updateCartItem(e){const d={product_id:e.product.id,qty:e.qty};this.$http.put(`${u}/v2/api/${i}/cart/${e.id}`,{data:d}).then(p=>{this.getCarts()})},deleteItem(e){this.$http.delete(`${u}/v2/api/${i}/cart/${e.id}`).then(d=>{this.getCarts()})},onSubmit(){alert("送出成功")}},mounted(){this.getCarts()}},C=t("h1",null,"購物車",-1),y={class:"table align-middle"},V=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),$=["onClick"],b=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),E={class:"input-group input-group-sm"},k=["onUpdate:modelValue","onChange"],A=["value"],P={class:"text-end"},T=t("td",{colspan:"3",class:"text-end"},"總計",-1),D={class:"text-end"},q=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),B={class:"text-end text-success"};function S(e,d,p,w,o,h){return l(),c(r,null,[C,t("table",y,[V,t("tbody",null,[o.cart.carts?(l(!0),c(r,{key:0},_(o.cart.carts,s=>(l(),c("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:a=>h.deleteItem(s)},[b,m(" x ")],8,$)]),t("td",null,n(s.product.title),1),t("td",null,[t("div",E,[x(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a=>s.qty=a,onChange:a=>h.updateCartItem(s)},[(l(),c(r,null,_(20,a=>t("option",{value:a,key:a+1235},n(a),9,A)),64))],40,k),[[I,s.qty]])])]),t("td",P,n(s.total),1)]))),128)):g("",!0)]),t("tfoot",null,[t("tr",null,[T,t("td",D,n(o.cart.total),1)]),t("tr",null,[q,t("td",B,n(o.cart.final_total),1)])])])],64)}const N=f(v,[["render",S]]);export{N as default};
