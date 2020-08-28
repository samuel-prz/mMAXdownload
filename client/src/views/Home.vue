<template>
<div>
      <div class="px-sm-2 px-md-16 mx-lg-12">
        <div class="px-sm-2 px-md-16 mx-lg-16">
          <div class="px-sm-2 px-md-16 mx-lg-16">
          <v-container dark class="hidden-sm-and-down " >
              <v-row class="">

                <v-col cols="12">
                    <h1 class="display-1 my-6 font-weight-bold text-center "> Ingenieros-Analistas-Programadores </h1>
                      <p class=" text-center "> 
                      Calle Las Carreras, Edificio Madeline #29 <br>
                      Oficinas 809-242-0034 <br>
                      Félix Berto Castillo (829) 868-3200 <br>
                      Carlos Díaz (809) 787-3200 <br>
                      Samuel Pérez (829) 410-0568 <br>
                      </p>
                  </v-col>
              </v-row>
          </v-container>
          <v-container>
            <h1  class="display-1 my-6 font-weight-bold text-center "> Descargar APKs </h1>
            <v-row>
              <v-col cols="12" lg="6">
                <h2 class="font-weight-bold text-center "> pINTEGRO </h2>
                <v-img
                  class="d-flex justify-center mb-6"
                  contain
                  src="@/assets/pINT.png"
                  transition="scale-transition"
                  height="130"
                />
                 <div class=" d-flex justify-center">
                 <v-btn  href="download/pINTEGRO.apk" height="100"  x-large block color="primary" dark><p class="no-uppercase pt-4">Versión Estable</p></v-btn>
                </div>
                 <div class=" pt-2 d-flex justify-center">
                 <v-btn block href="download/pINTEGRO_BETA.apk" height="100"  x-large max-width="20" color="green darken-3" dark><p class="no-uppercase pt-4"> Versión BETA</p></v-btn>
                </div>


                <v-container>
                  <h3 class="pa-4 font-weight-bold text-center "> Novedades</h3>
                  <v-card flat class="d-flex justify-center">
                  <ul>
                    <li>Búsqueda en los cobros 
                      registrados </li>
                      <li>Cobradores en orden 
                      Alfabético</li>
                      <li>Mejora visual en la
                      transferencia</li>
                      <li>Confirmación antes
                      de transferir archivos</li>
                      <li>Control de fecha del
                      equipo y sistema</li>
                  </ul>
                  </v-card>
                </v-container>
              </v-col>
              <v-col cols="12" lg="6">
                <h2 class="font-weight-bold text-center "> posINTEGRO </h2>
                <v-img
                  class="d-flex justify-center mb-6"
                  contain
                  src="@/assets/posINT.png"
                  transition="scale-transition"
                  height="130"
                />
                <div class="d-flex justify-center">
                  <v-btn 
                  href="download/posINTEGRO3228.apk" 
                  height="100" 
                  block x-large 
                  max-width="20" 
                  color="red darken-1" 
                  dark
                  > <p class="no-uppercase pt-4"> Versión Estable </p></v-btn>
                </div>
                <div 
                class=" pt-2 d-flex justify-center"
                >
                 <v-btn
                  href="download/posINTEGRO3222.apk" 
                  height="100" 
                  block x-large
                  max-width="20" 
                  color="orange" 
                  dark
                  > <p class="no-uppercase pt-4"> Versión BETA </p></v-btn>

                </div>
                <v-container>
                  <h3 class="pa-4 font-weight-bold text-center "> Novedades</h3>
                  <v-card class="d-flex justify-center" flat>
                  <ul>
                    <li>Búsqueda en los cobros 
                      registrados </li>
                      <li>Cobradores en orden 
                      Alfabético</li>
                      <li>Mejora visual en la
                      transferencia</li>
                      <li>Confirmación antes
                      de transferir archivos</li>
                      <li>Control de fecha del
                      equipo y sistema</li>
                  </ul>
                  </v-card>
                </v-container>
              </v-col>
            </v-row>

            <!-- ARRAY BOTONES -->
            <!-- -->
            <v-row>
              <v-col cols="6">
                <div class="d-flex justify-center">
                <v-btn
                v-if="show===true"
                color="primary"
                @click="openOptions()"
                class="d-flex justify-center"
                >
                  New Button +
                </v-btn>
                </div>
                <div
                  v-for="btn in arrayBotones" 
                  :key="btn"
                  class="pt-2"                
                >
                  <v-btn
                  :href="btn.link" 
                  height="100" 
                  block
                  x-large
                  max-width="" 
                  :color="btn.color" 
                  dark
                  > <p class="no-uppercase pt-4"> {{btn.text}} </p>
                  </v-btn>
                  <div>
                  <div class="d-flex justify-end">
                    <v-btn
                    v-if="show===true"
                     @click="open()">
                      edit
                    </v-btn>
                    <v-btn
                    dark
                    v-if="show===true"
                    >
                      delete 
                    </v-btn>
                  </div>
                  </div>
                </div>          
              </v-col>
            </v-row>
          </v-container>
            <v-container class="hidden-sm-and-up " >
              <v-row class="">

                <v-col cols="12">
                    <h1 class="display-1 my-6 font-weight-bold text-center "> Ingenieros-Analistas-Programadores </h1>
                      <p class=" text-center "> 
                      Calle Las Carreras, Edificio Madeline #29 <br>
                      Oficinas 809-242-0034 <br>
                      Félix Berto Castillo (829) 868-3200 <br>
                      Carlos Díaz (809) 787-3200 <br>
                      Samuel Pérez (829) 410-0568 <br>
                      </p>
                  </v-col>
              </v-row>
          </v-container>
        </div>
        </div>

  </div>
    <v-footer padless>
      <v-card
        dark
        width="100%"
        class="text-center"
      >
      <h1>{{this.$store.state.accesoState}}</h1>
        <v-card-text>
    <v-dialog v-model="dialog" max-width="200px">
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
          <span class="headline px-10">Admin</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="clave" @keyup.enter="acceder()" outlined autofocus type="password" required></v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
        </v-card-text>

      </v-card>
    </v-footer>
    <v-row justify="center">

  </v-row>
    <v-snackbar
      v-model="snackbar"
    >
      Welcome!
    </v-snackbar>
</div>
</template>

<script>
import axios from 'axios'

 
export default {
  name: 'Home',
  components: {

  },
  created() {

        try {
            //Envia los datos al servidor 
            const res = axios.post('/api/key', null);

            if(res.data.message === 'success'){
                //aqui se alimenta el array de los botones
            } else {
                console.log("Hubo un problema en la base de datos MySQL")
            }
        } catch (error) {
            console.log("Error en el servidor...")
            console.log(error)
        }
        
  },
    data: () => ({
      dialog: false,
      snackbar: false,
      clave: null,
      accesoClave: "3224",
      show: null,
      arrayBotones: [
        {text: "Version BETA 20", link: "download/beta20.apk", color: "red darken-1"},
        {text: "Version BETA 21", link: "download/beta21.apk", color: "red"},
        {text: "Version BETA 22", link: "download/beta22.apk", color: "red darken-4"},
        {text: "Version BETA 22", link: "download/beta22.apk", color: "red darken-4"},
        {text: "Version BETA 22", link: "download/beta22.apk", color: "red darken-4"},
        {text: "Version BETA 22", link: "download/beta22.apk", color: "red darken-4"}
      ] 
    }),
  methods: {
    openOptions() {
      console.log(this.$store.state.accesoState)
      if (this.$store.state.accesoState===true) {
        this.show=true
      } else this.show=false
      
    },
    async acceder() {
      if (this.clave === this.accesoClave) {
        console.log("Correcto")
        this.snackbar = true
        this.dialog = false
        this.show = true
        //desde aqui se envia al store la inicializacion del action que lleva por nombre [update] y su parametro es [this.snackbar] que lleva el dato a modificar
        this.$store.dispatch('update', this.snackbar)
      } else {
        console.log("Incorrecto")
        this.show = false
      }
    }
  },
}
</script>
<style>
.no-uppercase {
     text-transform: none;
}

</style>