import {
  ADD_TO_LIST,
  DELETE_FROM_LIST,
  UPDATE_ITEM
} from '../constants/ActionTypes';

// can make a good pattern out of using this pattern
const initialState = [];

// a store is really just a function, and an initial state
// we implement the initial state as a default parameter to
// the function, which seems super clean
export default function list(state = initialState, action) {

  // not really sure about this switch business
  // might wrap this in something
  switch (action.type) {

  // if we're adding to our list, we simply return a
  // new list, with the new item at the front
  // it's cool you can use spread operator like this
  case ADD_TO_LIST:
    return [{
      id: action.id,
      text: action.text,
    }, ...state];
    break;

  case UPDATE_ITEM:
    console.log('update item list store', action);
    var newState = state.map(item => {
      if (item.id === action.id) {
        console.log(item, action.text);
         item.text = action.text;
      }

      return item;
    });

    console.log(newState);
    return newState;
    break;

  case DELETE_FROM_LIST:
    return state.filter(item => item.id !== action.id);
    break;

  // it's kinda cool that the default case for a store
  // is to simply return the state
  default:
    return state;
  }

}
