import { combineReducers } from 'redux'
import getListReducer from './getListReducer'
import cartReducer from './cartReducer'

const reducer = combineReducers({
    GetList:getListReducer,
    CartReducer:cartReducer
})

export default reducer
