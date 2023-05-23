import {ACTIONS} from './actions';


const initialState = {
    messageFeed: [],
    phoneNum: ''
}

const reduсer = (state = initialState, action) => {
    switch(action.type) {

        case ACTIONS.ADD_MESSAGE_TO_FEED:
            return {
                ...state,
                messageFeed: [...state.messageFeed, action.message],
            }

        case ACTIONS.ADD_PHONE_NUM:
            return {
                ...state,
                phoneNum: action.num,
            }

        default:
            return state
    }
}





export default reduсer;