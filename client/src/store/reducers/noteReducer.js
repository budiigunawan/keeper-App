const initialState = {
    note: null,
    notes: []
}

function noteReducer(state = initialState, {type,payload}){
    switch (type) {
        case 'GET_NOTES':
            return {...state, notes: payload}
        case 'SET_NOTE':
            return {...state, note: payload}
        default:
            return state
    }
}

export default noteReducer;