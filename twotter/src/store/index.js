import { createStore } from "vuex";
import { UserModule } from "./user";

export default createStore({
  state: {},

  // are functions that effect the state -> directly change the state
  // ALL CAPS nomenclature
  mutations: {},

  // functions that we call throughout the application that calls mutations
  actions: {},

  modules: {
    User: UserModule,
  },
});
