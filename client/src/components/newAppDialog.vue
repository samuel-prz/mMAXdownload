<template>
<div>
    <v-dialog v-model="dialog_newApp" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
            New App +
        </v-btn>
        </template>
        
        <v-card >
        <v-card-title>
            <span class="headline">Add new App</span>
        </v-card-title>
        <v-card-text> 
            <v-container>
                <v-form ref="form">
            <v-row>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                
                <v-text-field autofocus v-model="pText" label="App Text" outlined required :rules="[v => !!v || 'Item is required']"></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                <v-text-field v-model="pIcon" label="Path.." outlined required :rules="[v => !!v || 'Item is required']"></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                <v-text-field v-model="pNovedades" label="Novedades" outlined required :rules="[v => !!v || 'Item is required']"></v-text-field>
                </v-col>
            </v-row>
                </v-form>
            </v-container>
            <small>*Verifica antes de guardar!</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black" text @click="dialog_newApp = false">Close</v-btn>
            <v-btn
            dark
            color="blue darken-1"
            @click="newApp"
            >Add</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
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

export default {
    name: 'Dialog',
    data() { 
        return {
            valid: false,
            pText: null,
            pIcon: null,
            pNovedades: null,
            dialog_newApp: false,
            snackbarSave: false,
            newApp_Rules: [
                v => v.lenght > 3 || 'Llene los campos'
            ],
            
            swatches: [
                ['#FF0000', '#AA0000', '#550000'],
                ['#FFFF00', '#AAAA00', '#555500'],
                ['#00FF00', '#00AA00', '#005500'],
                ['#00FFFF', '#00AAAA', '#005555'],
                ['#0000FF', '#0000AA', '#000055'],
            ],
        }
    },
    methods: {
    async newApp() {
        if(this.$refs.form.validate()){
            const appNew = {
                //Crear variable del link
                pFecha: this.timestamp,
                pNovedades: this.pNovedades,
                pIcon: this.pIcon,
                pText: this.pText
            }
                console.log(appNew)
                try {
                    //Envia los datos al servidor 
                    axios.post('/api/createApp', appNew).then(response => {
                        //Si la consulta SQL fue exitosa
                        if (response.data.message === "Success")
                        console.log("Success Create"),
                        this.snackbarSave=true,
                        this.dialog_newApp= false,
                        this.$emit('update', null),
                        //Vacear text-field
                        this.pFecha= null,
                        this.pNovedades= null,
                        this.pIcon= null,
                        this.pText= null
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
    }           
    }
}
</script>

<style>

</style>