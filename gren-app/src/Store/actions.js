export const ACTIONS = {
    ADD_MESSAGE_TO_FEED: 'ADD_MESSAGE_TO_FEED',
    ADD_PHONE_NUM: 'ADD_PHONE_NUM'

}


export const addMessageToFed = (message) => {
    return {
        type: ACTIONS.ADD_MESSAGE_TO_FEED,
        message
    }
}

export const addPhoneNum = (num) => {
    return {
        type: ACTIONS.ADD_PHONE_NUM,
        num
    }
}

