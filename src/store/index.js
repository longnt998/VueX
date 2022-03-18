import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//import modules
import auth from "./modules/auth";
import todsoModule from "./modules/todo";

const storeData = {
  modules: {
    auth,
    todsoModule
  },
};

const store = new Vuex.Store(storeData);

export default store;
