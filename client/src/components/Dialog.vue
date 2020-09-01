<template>
<div>
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
        
        <v-card >
        <v-card-title>
            <span class="headline">Add new button</span>
        </v-card-title>
        <v-card-text> 
            <v-container>
                <v-form ref="form">
            <v-row>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                
                <v-text-field autofocus v-model="pTexto" label="Button Text" outlined required :rules="[v => !!v || 'Item is required']"></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                <v-text-field v-model="pLink" label="Path.." outlined required :rules="[v => !!v || 'Item is required']"></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                <v-text-field disabled v-model="pFile" label="File" outlined required ></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                <v-text-field v-model="pVersion" label="Version" outlined required :rules="[v => !!v || 'Item is required']"></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                    <h4 class="px-4">Color</h4>
                    <div class="d-flex justify-center">
                        <v-color-picker mode="hexa" v-model="pColor" :swatches="swatches" show-swatches hide-mode-switch class="px-2"></v-color-picker>
                    </div>
                </v-col>
            </v-row>
                </v-form>
            </v-container>
            <small>*Verifica antes de guardar!</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black" text @click="dialog_newButton = false">Close</v-btn>
            <v-btn
            dark
            color="blue darken-1"
            @click="newBtn"
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
            arrayBotones:[],
            valid: false,
            pTexto: null,
            pFile: null,
            pVersion: null,
            pColor: null,
            pLink: null,
            pID: null,
            dialog_newButton: false,
            snackbarSave: false,
            newBtn_Rules: [
                v => v.lenght > 3 || 'Llene los campos'
            ],
            props: ['text_fields'],
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
    async newBtn() {
        if(this.$refs.form.validate()){
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
                        this.dialog_newButton= false,
                        this.$emit('update', null),
                        //Vacear text-field
                        this.pFile= null,
                        this.pVersion= null,
                        this.pColor= null,
                        this.pLink= null,
                        this.pTexto= null
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