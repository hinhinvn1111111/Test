import ActionsType from '../../constants/ActionsType'

const initState = {
    loading : false,
    data: [
        {"id":2,"Title":"Royvennn13212","ImageURL":"https://corsivacdncontent.blob.core.windows.net/shotscoffee/CF01BD5858C3657A92C6B10B63CFEA9B.jpg","Position":15,"Price":3,"CoffeeOrderOrSpecial":0,"ItemType":0,"MaxOrder":3,"status":0,"SoftDelete":false,"Status":0,"Id":2,"count":1},
        {"id":10,"Title":"teh peng!","ImageURL":"https://corsivacdncontent.blob.core.windows.net/shotscoffee/CF01BD5858C3657A92C6B10B63CFEA9B.jpg","Position":5,"Price":2,"CoffeeOrderOrSpecial":0,"ItemType":0,"MaxOrder":5,"status":0,"SoftDelete":false,"Status":0,"Id":10,"count":2},
        // {"id":19,"Title":"Corsiva Day!","ImageURL":"https://corsivacdncontent.blob.core.windows.net/shotscoffee/CF01BD5858C3657A92C6B10B63CFEA9B.jpg","Position":11,"Price":2,"CoffeeOrderOrSpecial":0,"ItemType":0,"MaxOrder":1,"status":0,"SoftDelete":false,"Status":0,"Id":19}
    ]
}

const cartReducer = (state = initState , action) => {
    switch(action.type){
        case ActionsType.REQUESTING_CART:
            return {
                ...state,
                loading:true
            }
        case ActionsType.FINISHED_REQUEST_CART:
            return {
                ...state,
                loading:false
            }
        case ActionsType.PLUS_ITEM:
            if(state.data[action.position].count < state.data[action.position].MaxOrder){
                state.data[action.position].count = state.data[action.position].count + 1
            }
          
            return {
                ...state,
            }
        case ActionsType.REDUCE_ITEM:
            if(state.data[action.position].count > 1){
                state.data[action.position].count = state.data[action.position].count - 1
            }
            return {
                ...state
            }
        case ActionsType.REMOVE_ITEM:
            state.data.splice(action.position,1)
            return {
                ...state
            }
    }
    return state;
}

export default cartReducer