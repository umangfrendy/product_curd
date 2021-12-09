<template>
  <v-container>
    <h1>Edit Product</h1>
    <v-row>
      <v-list-item>
        <v-list-item-content>
          <v-text-field
            outlined
            v-model="productName"
            label="Product Name"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="unitPrice"
            label="Price"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="unitInStock"
            label="Stock"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="qtyPerUnit"
            label="qty Per Unit"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
      <v-btn class="primary" @click="editproduct(id)"> edit</v-btn>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      // products: [],
      id:"",
      unitInStock: "",
      productName: "",
      unitPrice: "",
      categoryId: "",
      discontinued: "",
    };
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    editproduct(id) {
      // console.log(id)
      this.axios
        .patch("http://localhost:5000/product/update/"+id, {
          productName: this.productName,
          unitPrice: this.unitPrice,
          unitInStock: this.unitInStock,
          qtyPerUnit: this.unitPrice,
        })
        .then((Response) => {
          console.log(Response);
        });
      this.$router.push("/product");
    },
    fetchItems() {},
  },
  async mounted(){
  //  console.log("hello umang");
   this.id=this.$route.params._id
   this.productName=this.$route.params.productName
   this.unitPrice=this.$route.params.unitPrice
   this.unitInStock=this.$route.params.unitInStock
   this.qtyPerUnit=this.$route.params.qtyPerUnit
  }
};
</script>

