<template>
  <v-app>
    <div>
<v-toolbar color='blue'>
  <v-toolbar-side-icon></v-toolbar-side-icon>
  <v-toolbar-title to="/">umang</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat to="/category">Category</v-btn >
    <v-btn flat to="/product">Product</v-btn >
  </v-toolbar-items>
</v-toolbar>
<v-content >
  <router-view/>
</v-content>
<v-footer class="pa-3" color='blue' fixed>
    <v-spacer></v-spacer>
    <div>umang talpara&nbsp; &copy; {{ new Date().getFullYear() }}</div>
    <v-spacer></v-spacer>
  </v-footer>
  </div>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components:{
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
