import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storeData = {
  state: {
    todos: [
      { id: 1, title: "viec lam 1", done: true },
      { id: 2, title: "viec lam 2", done: true },
      { id: 3, title: "viec lam 3", done: false },
      { id: 4, title: "viec lam 4", done: false },
    ],
    auth: { isAuthenticated: false },
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    progress: (state, getters) => {
      const doneTodos = getters.doneTodos;
      return Math.round((doneTodos.length / state.todos.length) * 100);
    },
  },
  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
    MARK_COMPLETE(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) todo.done = !todo.done;
        return todo
      });
    },
  },
};

const store = new Vuex.Store(storeData);

export default store;
