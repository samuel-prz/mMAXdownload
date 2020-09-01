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
  <v-col cols="12" lg="6" >
    <div class="d-flex justify-center">
      <v-row justify="center" v-if="adminOptions===true">
        
        <Dialog  @update="update()" />
        <!--
        <v-dialog v-model="dialog_newButton" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              New Button +
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Add new button</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field v-model="pTexto" label="Button Text" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field v-model="pLink" label="Path.." outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field disabled v-model="pFile" label="File" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field v-model="pVersion" label="Version" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="11" sm="6" md="12">
                    <h4 class="px-4">Color</h4>
                    <v-color-picker v-model="pColor" class="ma-2" show-swatches swatches-max-height="600px"></v-color-picker>
                  </v-col>
                </v-row>
              </v-container>
              <small>*Verifica antes de guardar!</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" text @click="dialog_newButton = false">Close</v-btn>
              <v-btn color="blue darken-1" dark @click="newBtn(), dialog_newButton = false">Add</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        -->
      </v-row>
    </div>
    <div>
      <div
        v-for="(btn, index) in arrayBotones"
        :key="btn"
        class="pt-2"                
      >
      <v-row>
        <v-col cols="10">
          <v-btn
          :id="btn.btn_id"
          :href="btn.btn_link" 
          height="100" 
          block
          x-large
          max-width="" 
          :color="btn.btn_color" 
          dark
          > <p class="no-uppercase pt-4"> {{btn.btn_texto}} </p>
          </v-btn>
        </v-col>
        <v-col cols="2">

          <v-btn
          dark
          block
          v-if="adminOptions===true"
          @click="deleteBtn(btn.btn_id)">
          
            delete 
          </v-btn>
           <editDialog :pID="index" :arrayBotones="arrayBotones" v-if="adminOptions===true" />
        </v-col>
      </v-row>

        

       
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
 
export default {
  name: 'Home',
  components: {
    Footer,
    Dialog,
    editDialog
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
    openNew() {
      this.dialog_newButton=true
    },
    async newBtn() {
      const btnNew = {
        //Crear variable del link
        pColor: this.pColor.hexa,
        pFecha: this.timestamp,
        pVersion: this.pVersion,
        pLink: this.pLink,
        pFile: this.pFile,
        pTexto: this.pTexto
        
      }
      console.log(btnNew)

          try {
              //Envia los datos al servidor 
              axios.post('/api/createBtn', btnNew).then(response => {
                //Si la consulta SQL fue exitosa
                if (response.data.message === "Success")
                  console.log("Success Create"),
                  this.snackbarSave=true,
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

    async editBtn(index){
      console.log(index)
      this.dialog_newButton=true
      this.$emit('edit', this.dialog_newButton)

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
                //console.log(response.data.queryButtons),
                this.arrayBotones = response.data.queryButtons
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