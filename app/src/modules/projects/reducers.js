import {generateChillout} from 'redux-chillout';

const {actions, reducer} = generateChillout({
    addProject: (state, {amount}) => ({amount: state.amount + amount}),
    removeProject: (state, {amount}) => ({amount: state.amount - amount})
}, {
    amount: 0
});

export {actions};
export default reducer;
