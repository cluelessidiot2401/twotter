export const UserModule = {
  namespaced: true,
  state: {
    user: null,
  },

  // are functions that effect the state -> directly change the state
  // ALL CAPS nomenclature
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },

  // functions that we call throughout the application that calls mutations
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
};
