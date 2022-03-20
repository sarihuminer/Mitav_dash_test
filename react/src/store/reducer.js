import Axios from "axios";

const initialState = {
    users: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                users: state.users.add(action.value)
            };
        case 'DELETE':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'EDIT':
            debugger;
            console.log(action.value)
            return {
                ...state,
                users: action.value
            };
        case 'LOAD':
            console.log('load')
            return {
                ...state,
                users: action.value,

            };

    }
    return state;
}; export default rootReducer;