
const reducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_USER": {
            return {...state, user: action.data}
        }
        case "REMOVE_USER": {
            return {...state, user: null}
        }
    }
}

export default reducer;