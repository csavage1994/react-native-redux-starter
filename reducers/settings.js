// ajax shit here
const defaultState = {
    stateTest: "Hello World!",
};

/*
 * State argument object contains new state values
 * Actions argument object contains a type and a payload
 * Note: this can alternately be setup as a giant object with
 * methods who's keys are equivalent the action.type
 * export default function settingsReducer(state=defaultState, action) {
 */
export default function settingsReducer(state = defaultState, action) {
    switch (action.type) {
    case 'YOUR_ACTIONS_HERE': {
        return {
            ...state,
            stateTest: action.payload,
        };
    }
    default: {
        return state;
    }
    }
}
