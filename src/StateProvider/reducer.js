export const initialState = {
  products: [],
  cart: [],
  registeredUser: [],
  currentUser: [],
  cartSummary: [],
  order: [],
  orderDetails: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'RETRIEVE_PRODUCTS':
      return {
        ...state,
        products: action.product,
      };

    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.product],
      };

    case 'REMOVE_PRODUCT':
      const index = state.products.findIndex(
        (product) => product.id === action.id
      );
      let newProducts = [...state.products];
      if (index >= 0) {
        newProducts.splice(index, 1);
      } else {
        console.warn('no products');
      }
      return {
        ...state,
        products: newProducts,
      };

    case 'ADD_PRODUCT_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    case 'REMOVE_PRODUCT_FROM_CART':
      const cartIndex = state.cart.findIndex((cart) => cart.id === action.id);
      let cartProducts = [...state.cart];
      if (cartIndex >= 0) {
        cartProducts.splice(cartIndex, 1);
      } else {
        console.warn('no products');
      }
      return {
        ...state,
        cart: cartProducts,
      };

    case 'KEEP_CART_SUMMARY':
      return {
        ...state,
        cartSummary: action.cartSummary,
      };

    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
        cartSummary: [],
      };

    case 'Register_User':
      let userIsUnique = true;
      state.registeredUser.map((user) => {
        if (user.username === action.registeredUser.username) {
          alert('Username already in use');
          userIsUnique = false;
        }
      });
      state.registeredUser.map((user) => {
        if (user.email === action.registeredUser.email) {
          alert('Email already in use');
          userIsUnique = false;
        }
      });
      if (userIsUnique) {
        return {
          ...state,
          registeredUser: [...state.registeredUser, action.registeredUser],
          currentUser: [action.registeredUser],
        };
      } else {
        return { ...state };
      }

    case 'RETRIEVE_USER':
      return {
        ...state,
        registeredUser: action.registeredUser,
      };

    case 'LOGIN':
      state.registeredUser.map((user) => {
        if (
          user.username === action.currentUser.username &&
          user.password === action.currentUser.password
        ) {
          alert('logged in');

          state = {
            ...state,
            currentUser: [
              { id: user.custID, email: user.email, ...action.currentUser },
            ],
          };
        }
      });
      if (state.currentUser.length === 0) alert('invalid username or password');
      return { ...state };

    case 'LOGOUT':
      return {
        ...state,
        currentUser: [],
      };

    case 'CREATE_ORDER':
      return {
        ...state,
        order: [action.order],
      };

    case 'CREATE_ORDER_SUMMARY':
      return {
        ...state,
        orderDetails: [action.orderDetails],
      };
    case 'UPDATE_ORDER':
      state.order.map((order) => {
        if (order.orderID === action.orderID) {
          order.delievered = action.delievered;
        }
      });
      console.log(state.order);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
