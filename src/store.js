// store.js
import Vuex from 'vuex';
import axios from 'axios';

export function createStore() {
  return new Vuex.Store({
    state: {
      users: []
    },
    mutations: {
      setUsers(state, users) {
        state.users = users;
      }
    },
    actions: {
      async fetchUsers({ commit }) {
        await axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            commit('setUsers', response.data);
          });
      }
    }
  });
}
