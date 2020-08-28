import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accesoState: false,
    accessToken: null
  },
  mutations: {
    //la mutacion updateAcceso recive los parametros de la funcion tipo actions, que son a su vez enviados a travez del commit
    updateAcceso: (state, accesoState) => {
      state.accesoState = accesoState; //aqui se procede a cambiar el valor de la variable dentro de state
    }
  },
  actions: {
    //Recibe desde el componente los parametros a traves de la funcion update() (el nombre de la funcion no es reservado.. se puede usar cualquier nombre)
    //commit inicia la mutacion y dentro de ella procede a actualizar el State de la variable
    //accesoState es la variable que contiene el valor por la cual se actualizara el valor del state
    update({ commit }, accesoState){ //commit es el mensajero a la mutacion - accesoState es los valores enviados desde el componente.
      commit('updateAcceso', accesoState);//commit envia a la mutacion [updateAcceso] la variable [accesoState] 
    }
    
  },
  getters: {
    // ...
    logged: state => {
      const key = state.accessToken;
      return key
    }},

  modules: {
  }
})
