<template>
  <v-container>
    <h1>Create Category</h1>
    <v-row>
      <v-list-item>
        <v-list-item-content>
 <v-text-field outlined v-model="categoryName" required label="Category Name"> </v-text-field>

 </v-list-item-content>
</v-list-item>
<v-btn class="primary" @click="addCategory"> Add</v-btn>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      // products: [],
      categoryName: "",

    };
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    addCategory() {
      this.axios
        .post("http://localhost:5000/category/create", {
          categoryName: this.categoryName,
    
        })
        .then((Response) => {
          console.log(Response);
          // console.log( this.categorys[0].categoryName)
          // console.log(Response.data.category[0].categoryName);
          
        });
        this.$router.push('/category')
    },
    edit() {
      alert("edit");
    },
  },
};
</script>

