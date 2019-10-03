import ActionTypes from "../../constants/ActionsType";

function requesting() {
  return {
    type: ActionTypes.REQUESTING_CART
  };
}

function finishrequesting() {
  return {
    type: ActionTypes.FINISHED_REQUEST_CART
  };
}

// function callPlus() {
//   return {
//     type: ActionTypes.PLUS_ITEM
//   };
// }

function callPlus(position, callbackSuccess) {
  if (callbackSuccess) {
    callbackSuccess(position);
  }
  return {
    type: ActionTypes.PLUS_ITEM,
    position
  };
}

function callReduce(position, callbackSuccess) {
  if (callbackSuccess) {
    callbackSuccess(position);
  }
  return {
    type: ActionTypes.REDUCE_ITEM,
    position
  };
}

function callRemove(position, callbackSuccess) {
  if (callbackSuccess) {
    callbackSuccess(position);
  }
  return {
    type: ActionTypes.REMOVE_ITEM,
    position
  };
}

// function failGetList(message, callbackError) {
//   if (callbackError) {
//     callbackError(message);
//   }
//   return {
//     type: ActionTypes.FINISHED_REQUEST
//   };
// }

export function ActionsPlus(position, callbackSuccess) {
  return async dispatch => {
    await dispatch(requesting());
    await dispatch(callPlus(position, callbackSuccess));
    await dispatch(finishrequesting());
  };
}

export function ActionsReduce(position, callbackSuccess) {
  return async dispatch => {
    await dispatch(requesting());
    await dispatch(callReduce(position, callbackSuccess));
    await dispatch(finishrequesting());
  };
}

export function ActionsRemove(position, callbackSuccess) {
  return async dispatch => {
    await dispatch(requesting());
    await dispatch(callRemove(position, callbackSuccess));
    await dispatch(finishrequesting());
  };
}
