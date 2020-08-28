<template>
  <!--Punto de entrada para las vistas-->
  <v-app>
    <div>
      <v-toolbar
      height="240"
      
      dark
      prominent
      src="@/assets/backg.jpg"
      > 
       
        <v-img
          class="d-flex justify-center mb-6"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          height="230"
        />      
      
    </v-toolbar>
    </div>
    <v-main>
      <v-scroll-x-transition :hide-on-leave="true">
        <router-view></router-view>
      </v-scroll-x-transition>
    </v-main>

  </v-app>
</template>

<script>
import axios from 'axios'

import login from './components/login'
export default {
  name: 'App',
  components: {
    login

  },
  data: () => ({
  }),
  methods: {
    }
};
</script>
