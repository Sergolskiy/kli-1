export const cart = {
  state: {
    cart: [],
    openCart: false,
  },

  mutations: {
    addToCart: (state, payload) => {
      state.cart = [...state.cart, payload.product];
    },

    removeCartItem: (state, payload) => {
      state.cart = state.cart.splice(payload.id, 1);
    },

    closeCart: state => {
      state.openCart = false;
    },

    openCart: state => {
      state.openCart = true;
    },
  },

  getters: {
    getCart: state => {
      return state.cart
    },


    isOpenCart: state => {
      return state.openCart
    },
  },

  actions: {
    addProduct({commit}, product) {
      commit('addToCart',{product: product,})
    },

    removeProduct({commit}, id) {
      commit('removeCartItem',{id: id,})
    },
  }
}
