import TravelBag from '../Resources/Picture/Products/TravelBag.jpg';
import NikonLens from '../Resources/Picture/Products/NikonLens.jpg';
import CDBLotion from '../Resources/Picture/Products/CBDLotion.jpg';
import ArmaniWatch from '../Resources/Picture/Products/ArmaniWatch.jpg';
import AppleWatch from '../Resources/Picture/Products/AppleWatch.jpg';
import DifferenteShoe from '../Resources/Picture/Products/DifferenteShoe.jpg';
import NikeShoe from '../Resources/Picture/Products/NikeShoe.jpg';
import Parse from '../Resources/Picture/Products/Parse.jpg';
import Laptop from '../Resources/Picture/Products/Laptop.jpg';

export const initialState = {
  products: [
    {
      id: 1,
      name: 'Travel Bag',
      image: TravelBag,
      price: 50,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      name: 'Nikon Lens',
      image: NikonLens,
      price: 100,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      name: 'CDB Lotion',
      image: CDBLotion,
      price: 25,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      name: 'Armani Watch',
      image: ArmaniWatch,
      price: 45,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      name: 'Apple Watch',
      image: AppleWatch,
      price: 70,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 6,
      name: 'Differente Shoe',
      image: DifferenteShoe,
      price: 60,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 7,
      name: 'Nike Shoe',
      image: NikeShoe,
      price: 60,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 8,
      name: 'Parse',
      image: Parse,
      price: 30,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 9,
      name: 'Laptop',
      image: Laptop,
      price: 500,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ],
  cart: [],
  registeredUser: [],
  currentUser: [],
};

const reducer = (state, action) => {
  switch (action.type) {
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
    case 'Register_User':
      state.registeredUser.map((user) => {
        if (user.username === action.registeredUser.username) {
          alert('Username already in use');
          return { ...state };
        }
      });
      state.registeredUser.map((user) => {
        if (user.email === action.registeredUser.email) {
          alert('Email already in use');
          return { ...state };
        }
      });
      return {
        ...state,
        registeredUser: [...state.registeredUser, action.registeredUser],
        currentUser: [action.registeredUser],
      };
    case 'LOGIN':
      if (state.registeredUser.length === 0) {
        alert('no user');
        return { ...state };
      }
      state.registeredUser.map((user) => {
        if (
          user.username === action.currentUser.username &&
          user.password === action.currentUser.password
        ) {
          alert('logged in');
          return {
            ...state,
            currentUser: [action.currentUser],
          };
        } else {
          alert('Invalid password or username');
          console.log(state);
          return { ...state };
        }
      });
      console.log(state);
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
