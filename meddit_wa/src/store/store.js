//import Vue from 'vue'
//import { createApp } from 'vue'
//import App from '../App.vue'
//import Vuex from 'vuex'
import { createStore } from 'vuex';
import 'es6-promise/auto'
// import createPersistedState from 'vuex-persistedstate'


//createApp(App).use(Vuex).mount('#app')
//Vue.use(Vuex)

//export default new Vuex.Store({
const store = createStore({
	// You can never modified the state
  strict: true,  
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  // In mutation goes the same names that actions
  // To invoque a mutation you need an action
  mutations: {
    setToken (state, token) {			
      state.token = token
		//if token is defined
		if (token){
		state.isUserLoggedIn = true
		}else{
		state.isUserLoggedIn = false
		}  		
    },
    setUser (state, user) {		
      state.user = user		
    }
  },
  //Actions are invoked from Vue components
  actions: {
	//We're sayin "Call the mutation set token and send it token object as a parameter"
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})

export default store