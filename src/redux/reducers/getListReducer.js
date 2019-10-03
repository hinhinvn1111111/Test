import ActionsType from '../../constants/ActionsType'

const initState = {
    loading : false,
    data: []
}

const getListReducer = (state = initState , action) => {
    switch(action.type){
        case ActionsType.REQUESTING_GETLIST:
            return {
                ...state , 
                loading :true
            }
        case ActionsType.FINISHED_REQUEST:
            return {
                ...state , 
                loading :false
            }
        case ActionsType.SUCCESS_GETLIST:
            return {
                ...state,
                loading :false,
                data : action.data
            }
    }
    return state;
}

export default getListReducer