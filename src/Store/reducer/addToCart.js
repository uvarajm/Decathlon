
import { ADDTOCART } from '../types';
const INITIAL_STATE = {
    dataCount: []
};

const addToCart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDTOCART:
            state.dataCount.push({
                'id': action.payload.id, 'price': action.payload.price, 'quantity': action.payload.quantity,
                'total': action.payload.total
            })
            return { ...state }
        default: return state;
    }

}

export default addToCart;