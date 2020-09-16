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
          <h1  class="display-1 my-6 font-weight-bold text-center "> Descargar APKs <newAppDialog v-if="adminOptions===true" /> </h1>
          
          <v-row>
            <v-col 
            v-for="(app, indexApp) in arrayApp"
            :key="app"
            cols="12" lg="6"
            >
              <h2 class="font-weight-bold text-center "> {{app.app_text}} </h2>
              <v-img
                class="d-flex justify-center mb-6"
                contain
                :src="app.app_icon"
                transition="scale-transition"
                height="130"
              />
                  <div class="d-flex justify-center">
                    <v-row justify="center" v-if="adminOptions===true">
                      
                      <Dialog :indexApp="indexApp" :arrayApp="arrayApp" @update="update()" />
                      <v-btn
                        class="rounded-sm"
                        dark
                        v-if="adminOptions===true"
                        @click="deleteApp(app.app_id)">
                      
                        delete app 
                      </v-btn>
                    </v-row>
                  </div>
                    <div        
                      v-for="(btn, index) in arrayBotones"
                      :key="btn"            
                      >
                          <v-row
                            v-if="arrayApp[indexApp].app_id === arrayBotones[index].app_id"
                            align="center"
                            justify="center"
                            class="pt-2 px-2"  
                            >
                            <v-btn
                              :id="btn.btn_id"
                              :href="btn.btn_link" 
                              height="100" 
                              block x-large 
                              max-width="20"
                              :color="btn.btn_color" 
                              dark
                                > <p class="no-uppercase pt-4"> {{btn.btn_texto}} </p>
                            </v-btn>
                            <v-btn
                              class="rounded-sm"
                              dark
                              v-if="adminOptions===true"
                              @click="deleteBtn(btn.btn_id)">
                            
                              delete 
                            </v-btn>
                            <editDialog :pID="index" :arrayBotones="arrayBotones" v-if="adminOptions===true" />
                          </v-row>

                      

                    
                    </div> 
                            
            </v-col>
          </v-row>
          <!--
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
                    `<li>Búsqueda en los cobros 
                    registrados </li>
                    <li>Cobradores en orden 
                    Alfabético</li>
                    <li>Mejora visual en la
                    transferencia</li>
                    <li>Confirmación antes
                    de transferir archivos</li>
                    <li>Control de fecha del
                    equipo y sistema</li>`
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

             ARRAY BOTONES -->
            <!-- -->

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

<!-- se comunica entre los componentes -->
<Footer @acceder="acceder($event)" />
<v-snackbar
  v-model="snackbar"
>
  Welcome!
</v-snackbar>
<v-snackbar
  dark
  v-model="snackbarSave"
>
  Guardado con Exito!
</v-snackbar>

</div>
</template>

<script>
import axios from 'axios'
import Footer from '../components/footer'
import Dialog from '../components/Dialog'
import editDialog from '../components/editDialog'
import newAppDialog from '../components/newAppDialog'
 
export default {
  name: 'Home',
  components: {
    Footer,
    Dialog,
    editDialog,
    newAppDialog
  },
  async created() {
        setInterval(this.getNow, 1000);
        this.update();
        
  },
    data: () => ({
      //Post Variables
      pTexto: null,
      pFile: null,
      pVersion: null,
      pColor: null,
      pLink: null,
      pID:null,
      //Dialogs
      dialog: false,
      edit: false,
      //dialog_newButton: false,
      adminOptions: null,
      //Alertas
      snackbar: false,
      snackbarSave: false,
      //Variables
      clave: null,
      accesoClave: "3224",
      arrayBotones: [],
      arrayApp:[],
      timestamp: ""
    }),
  methods: {
    getNow: function() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;
        this.timestamp = dateTime;
    },

    async deleteBtn(pID){
          const btnDel = {
            pID: pID
          }
          try {
              //Envia los datos al servidor 
              axios.post('/api/deleteBtn', btnDel).then(response => {
                //Si la consulta SQL fue exitosa
                if (response.data.message === "Success")
                  console.log("Success delete"),
                  this.update()
                  //Si fallo la consulta SQL
                else {console.log(response.data.message) }
              }).catch(error =>{
                console.log(error)
              })
          } catch (error) {
              console.log("Error en el servidor(req or response)...")
              console.log(error)
          }

    },
    async deleteApp(pID){
          const appDel = {
            pID: pID
          }
          try {
              //Envia los datos al servidor 
              axios.post('/api/deleteApp', appDel).then(response => {
                //Si la consulta SQL fue exitosa
                if (response.data.message === "Success")
                  console.log("Success delete App"),
                  this.update()
                  //Si fallo la consulta SQL
                else {console.log(response.data.message) }
              }).catch(error =>{
                console.log(error)
              })
          } catch (error) {
              console.log("Error en el servidor(req or response)...")
              console.log(error)
          }
    },
    async acceder(adminOptions) {
        console.log("Correcto")
        this.snackbar = true
        this.adminOptions = true
      
    },
    async update() {
        try {
            //Envia los datos al servidor 
            axios.post('/api/buttons', null).then(response => {
              //Si la consulta SQL fue exitosa
              if (response.data.message === "Success")
                console.log(response.data.queryButtons),
                this.arrayBotones = response.data.queryButtons,
                this.arrayApp = response.data.queryApp
                //Si fallo la consulta SQL
              else {console.log(response.data.message) }
            }).catch(error =>{
              console.log(error)
            })
        } catch (error) {
            console.log("Error en el servidor(req or response)...")
            console.log(error)
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