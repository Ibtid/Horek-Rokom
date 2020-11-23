import TravelBag from '../Resources/Picture/Products/TravelBag.jpg';
import NikonLens from '../Resources/Picture/Products/NikonLens.jpg';
import CDBLotion from '../Resources/Picture/Products/CBDLotion.jpg';
import ArmaniWatch from '../Resources/Picture/Products/ArmaniWatch.jpg';
import AppleWatch from '../Resources/Picture/Products/AppleWatch.jpg';
import DifferenteShoe from '../Resources/Picture/Products/DifferenteShoe.jpg';
import NikeShoe from '../Resources/Picture/Products/NikeShoe.jpg';
import Parse from '../Resources/Picture/Products/Parse.jpg';
export const initialState = {
  products: [
    {
      id: 1,
      name: 'Travel Bag',
      image: TravelBag,
      price: 50,
    },
    {
      id: 2,
      name: 'Nikon Lens',
      image: NikonLens,
      price: 100,
    },
    {
      id: 3,
      name: 'CDB Lotion',
      image: CDBLotion,
      price: 25,
    },
    {
      id: 4,
      name: 'Armani Watch',
      image: ArmaniWatch,
      price: 45,
    },
    {
      id: 5,
      name: 'Apple Watch',
      image: AppleWatch,
      price: 70,
    },
    {
      id: 6,
      name: 'Differente Shoe',
      image: DifferenteShoe,
      price: 60,
    },
    {
      id: 7,
      name: 'Nike Shoe',
      image: NikeShoe,
      price: 60,
    },
    {
      id: 8,
      name: 'Parse',
      image: Parse,
      price: 30,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.product],
      };
    default:
      return state;
  }
};

export default reducer;
