import {customerActionType} from '../../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case  customerActionType.FETCH_CUSTOMERS_PAYMENT_REPORT:
            return action.payload;
        default:
            return state;
    }
};
