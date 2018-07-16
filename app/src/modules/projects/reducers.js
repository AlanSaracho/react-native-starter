const actions = {
    ADD_PROJECT: 'add_project'
};

export function addProject() {
    return {type: actions.ADD_PROJECT};
}

const reducer = (state = {}, action) => {
    switch (action.type) {
        case actions.ADD_PROJECT:
            return {...state, amount: state.amount + 1};
        default:
            return state;
    }
};

export default reducer;
