import {
  ADD_TO_LIST,
  DELETE_FROM_LIST,
  UPDATE_ITEM
} from '../constants/ActionTypes';

export function add (text) {
  return {
    id: Date.now(),
    type: ADD_TO_LIST,
    text
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_FROM_LIST,
    id
  };
}

export function updateItem(id, text) {
  return {
    type: UPDATE_ITEM,
    text,
    id
  };
}
