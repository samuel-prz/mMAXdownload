<template>
<div>
    <v-dialog v-model="dialog_editButton" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            block
            dark
            v-bind="attrs"
            v-on="on"
           class="rounded-sm"

        >
            Edit
        </v-btn>
        </template>
        
        <v-card >
        <v-card-title>
            <span class="headline">Edit button</span>
        </v-card-title>
        <v-card-text> 
            <v-container>
                <v-form ref="form">
            <v-row>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                
                <v-text-field autofocus v-model="arrayBotones[pID].btn_texto" label="Button Text" outlined required :rules="[v => !!v || 'Item is required']"></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                <v-text-field v-model="arrayBotones[pID].btn_link" label="Path.." outlined required :rules="[v => !!v || 'Item is required']"></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                <v-text-field disabled v-model="arrayBotones[pID].btn_file" label="File" outlined required ></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                <v-text-field v-model="arrayBotones[pID].btn_version" label="Version" outlined required :rules="[v => !!v || 'Item is required']"></v-text-field>
                </v-col>
                <v-col class="pt-2" cols="12" sm="6" md="12">
                    <h4 class="px-4">Color</h4>
                    <div class="d-flex justify-center">
                        <v-color-picker mode="hexa" v-model="arrayBotones[pID].btn_color" :swatches="swatches" show-swatches hide-mode-switch class="px-2"></v-color-picker>
                    </div>
                </v-col>
            </v-row>
                </v-form>
            </v-container>
            <small>*Verifica antes de guardar!</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black" text @click="dialog_editButton = false">Close</v-btn>
            <v-btn
            dark
            color="blue darken-1"
            @click="editBtn"
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
    name: 'editDialog',
    //PASAR INDEX!!
    props: ['arrayBotones', 'pID'],
    data() { 
        return {
            index: 1,
            valid: false,
            dialog_editButton: false,
            snackbarSave: false,
            newBtn_Rules: [
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
        log() {
            console.log(this.pID)
        },
    async editBtn() {
        if(this.$refs.form.validate()){
            
            const btnNew = {
                //Crear variable del link
                pColor: this.arrayBotones[this.pID].btn_color,
                pFecha: null,
                pVersion: this.arrayBotones[this.pID].btn_version,
                pLink: this.arrayBotones[this.pID].btn_link,
                pFile: this.arrayBotones[this.pID].btn_file,
                pTexto: this.arrayBotones[this.pID].btn_texto,
                pID: this.arrayBotones[this.pID].btn_id
                
                
            }
            console.log(btnNew)

                try {
                    //Envia los datos al servidor 
                    axios.post('/api/editBtn', btnNew).then(response => {
                        //Si la consulta SQL fue exitosa
                        if (response.data.message === "Success")
                            console.log("Success Edit"),
                            this.snackbarSave=true,
                            this.dialog_editButton= false,
                            this.$emit('update', null)

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