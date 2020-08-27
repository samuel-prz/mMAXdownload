<template>

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
                  <v-btn href="download/posINTEGRO3228.apk" height="100" block x-large max-width="20" color="red darken-1" dark> <p class="no-uppercase pt-4"> Versión Estable </p></v-btn>
                </div>
                <div class=" pt-2 d-flex justify-center">
                 <v-btn href="download/posINTEGRO3222.apk" height="100" block x-large max-width="20" color="orange" dark> <p class="no-uppercase pt-4"> Versión BETA </p></v-btn>
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



</template>

<script>
// @ is an alias to /src

 
export default {
  name: 'Home',
  components: {

  },
}
</script>
<style>
.no-uppercase {
     text-transform: none;
}

</style>