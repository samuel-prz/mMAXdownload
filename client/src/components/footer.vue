<template>
    <v-footer padless>
      <v-card
        dark
        width="100%"
        class="text-center"
      >
     <!-- <h1>{{this.$store.state.accesoState}}{{this.timestamp}}</h1> -->
        <v-card-text>
          <v-dialog v-model="dialog" max-width="200px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :disabled="disabled"
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
                <v-btn
                  dark
                  class="px-13"
                  @click="acceder()"
                >
                ENTER
                </v-btn>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return{
            dialog: false,
            accesoClave: '3224',
            clave: null,
            adminOptions: null,
            disabled: false
        }
    },
    methods: {

    acceder() {
      if (this.clave === this.accesoClave) {
        //console.log("Correcto")
        this.adminOptions = true
        this.disabled = true
        this.$emit('acceder', this.adminOptions)
      } else {
        console.log("Incorrecto")
      }
    },

    }

}
</script>

<style>

</style>