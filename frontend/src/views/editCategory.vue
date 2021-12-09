<template>
  <v-container>
    <h1>Create Category</h1>
    <v-row>
      <v-list-item>
        <v-list-item-content>
 <v-text-field outlined v-model="categoryName" required label="Category Name"> </v-text-field>
 </v-list-item-content>
</v-list-item>
<v-btn class="primary" @click="editCategory(id)"> edit</v-btn>
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
      categoryName: "",

    };
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    editCategory(id) {
   console.log(this.id)

      this.axios
        .patch("http://localhost:5000/category/update/"+id, {
          categoryName: this.categoryName,
        })
        .then((Response) => {
          console.log(Response);
        });
        this.$router.push("/category");
    },
  },
   async mounted(){
  //  console.log("hello umang");
   this.id=this.$route.params._id
   this.categoryName=this.$route.params.categoryName
  }
};
</script>

