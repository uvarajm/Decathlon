import { ADDTOCART } from '../types'

export const addToCart = (id, price, quantity, calPrice) => {
    return {
        type: ADDTOCART,
        payload: {
            'id': id,
            'price': price,
            'quantity': quantity,
            'total': calPrice
        }
    }
}