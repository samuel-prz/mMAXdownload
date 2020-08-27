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
    <v-footer padless>
      <v-card
        dark
        width="100%"
        class="text-center"
      >
        <v-card-text>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
        >
         <v-icon>lock</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-card-text>

      </v-card>
    </v-footer>
    <v-row justify="center">

  </v-row>
  </v-app>
</template>

<script>
import login from './components/login'
export default {
  name: 'App',
  components: {
    login

  },
  data: () => ({
    dialog: false,


  }),

  methods: {
    login() {
      this.loginView = true;
      console.log("Login"+this.loginView)
    }

  }
};
</script>
