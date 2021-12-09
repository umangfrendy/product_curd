<template>
  <div class="container">
  <v-row class="mt-5">
       <h1>Category</h1>
        <v-spacer></v-spacer>
       <v-btn to="/add_category" >Add Category</v-btn >
    </v-row>
    <v-simple-table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Category</td>
          <td>Edit</td>
       
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categorys" :key="category._id">
          <td>{{ category._id }}</td>
          <td>{{ category.categoryName }}</td>
          <td>
            <v-btn @click="edit(category)" icon>
              <span class="mdi mdi-grease-pencil"></span>
            </v-btn>
          </td>
         
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      categorys: [],
    };
  },

  created: function () {
    this.fetchItems();
    
  },

  methods: {
      edit(category) {
      console.log("product.....",category)
      this.$router.push(
        {name:"editCategory",
        params:{
        _id :category._id ,
        categoryName:category.categoryName,
      }})
      

    },
    
    fetchItems() {
      this.axios
        .get("http://localhost:5000/category/readall")
        .then((Response) => {
          this.categorys = Response.data.category;
          // console.log( this.categorys[0].categoryName)
          // console.log(Response.data.category[0].categoryName);
          
        });
        
    },
  },
};

</script>