import Vue from 'vue'
import Vuex from 'vuex'
import asios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        owner:'Amsal',
        count: 1,
        editedArticel : 'edit here',
    },
    mutations:{
        increment(state){
            state.count++
        },
        edited(state, payload){
            // state.editedArticel = payload.content
            // console.log(payload.content) 
            
        }
    },
    actions:{
        increment(context){
            context.commit('increment')
        },
        getEditedArticle(context, payload){
            context.commit('edited', payload)
            
        }
    },

})

export default store