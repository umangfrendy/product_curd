<template>
  <v-container>
    <h1>Create Product</h1>
    <v-row>
      <v-list-item>
        <v-list-item-content>
 <v-text-field outlined v-model="productName" label="Product Name"></v-text-field>
 <v-text-field outlined v-model="unitPrice" label="Price"></v-text-field>
 <v-text-field outlined v-model="unitInStock" label="Stock"></v-text-field>
 <v-text-field outlined v-model="qtyPerUnit" label="qty Per Unit"></v-text-field>

 </v-list-item-content>
</v-list-item>
<v-btn class="primary" @click="addproduct"> Add</v-btn>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      // products: [],
      unitInStock: "",
      productName: "",
      unitPrice: "",
      categoryId:"",
      discontinued:"",

    };
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    addproduct() {
      this.axios
        .post("http://localhost:5000/product/create", {
          productName: this.productName,
          unitPrice: this.unitPrice,
          unitInStock: this.unitInStock,
          categoryId:"61ac6a509a3a1890cdb405a4",
          qtyPerUnit:this.unitPrice,
          discontinued:false
        })
        .then((Response) => {
          console.log(Response);
          // console.log( this.categorys[0].categoryName)
          // console.log(Response.data.category[0].categoryName);
        });
        this.$router.push('/product')

    },
    edit() {
      alert("edit");
    },
    fetchItems() {},
  },
};
</script>

