import ActionTypes from '../../constants/ActionsType'
import API from '../../api'

function callGetList () {
  return {
    type: ActionTypes.REQUESTING_GETLIST
  }
}

function successGetList (data, callbackSuccess) {
  if (callbackSuccess) {
    callbackSuccess(data)
  }
  return {
    type: ActionTypes.SUCCESS_GETLIST,
    data
  }
}

function failGetList(message, callbackError) {
  if (callbackError) {
    callbackError(message)
  }
  return {
    type: ActionTypes.FINISHED_REQUEST
  }
}

export function actionGetList (callbackSuccess, callbackError) {
  return (dispatch) => {
    dispatch(callGetList())
    API.getList().then(res => {
      if (res.status === 200 && res.problem===null) {
        return dispatch(successGetList(res.data, callbackSuccess))
      } else {
        return dispatch(failGetList('Can not get', callbackError))
      }
    })
  }
}

