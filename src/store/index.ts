import Vue from 'vue';
import Vuex from 'vuex';

import teams from './modules/teams'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
       teams: teams,
       user: user
   }
})