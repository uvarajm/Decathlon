import { addToCart } from '../Store/action/addToCart'
import { useDispatch } from 'react-redux'

// Custom hooks to implement Add to cart functionality
export const useAddToCart = () => {

    const dispatch = useDispatch();
    const dispatchAddToCart = (id, price, quantity, calPrice) => {
        dispatch(addToCart(id, price, quantity, calPrice));
    }
    return dispatchAddToCart;

}
