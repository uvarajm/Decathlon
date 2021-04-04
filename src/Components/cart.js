import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import products from '../Mock/product.json';
import { loginform } from '../Store/action/login';
// Cart details page implementation
const Cart = () => {
    const { cart } = useSelector(
        state => ({
            cart: state.addToCart.dataCount,
        })
    );
    const { isLoggedin } = useSelector(
        state => ({
            isLoggedin: state.login.loginSuccess.loginSuccess
        })
    );
    const dispatch = useDispatch();
    // Calculate discounted price. 
    const calcDiscount = (total) => {
        let discPrice = total - (total / 100) * 20;

        return parseFloat(discPrice.toFixed(2))
    }
    const productlist = [];
    let totalAmttoPay = 0;
    cart.map((i) => {
        const pList = products.filter(p => p.id == i.id);
        pList[0]['qty'] = i.quantity;
        pList[0]['total'] = i.total;
        pList[0]['discount'] = calcDiscount(i.total);
        totalAmttoPay = totalAmttoPay + pList[0]['discount'];
        const found = productlist.some(el => el.id === i.id);
        if (!found) {
            productlist.push(pList[0]);
        }
    })
    console.log("productlist", productlist)
    const checkIsLogin = () => {
        if (!isLoggedin) {
            dispatch(loginform())
        } else {
            alert("Order Complete");
            window.location.href = '/'
        }
    }
    const caltlist = productlist.map((item, i) =>
        <div className="p-row" key={i}>
            <div className="p-img extra-width">
                <img src={item.image} />
            </div>
            <div className="p-detail-con">
                <h4 className="p-title">Men's ASICA GEL - Kayano 26</h4>
                <div className="d-flex"><span
                    className="vip-prices">${item.price}</span></div>

                <span className="product-list">Qty : {item.qty}</span>
            </div>
            <div className="total-pdt">
                <p className="total-price">Discounted Price (20% off):<span
                    className="vip-prices"> ${item.discount}</span></p>
            </div>
        </div>

    )
    return (
        <div className="quick-cart-con ">
            <div className="col-lg-4">
                <div className="quick-cart-container fadeInRight animated">
                    <div className="btn-container">
                        <div className="vip-price" style={{ width: 300 }}>
                            <p>Total Price : ${totalAmttoPay.toFixed(2)}</p>
                        </div>
                        {!isLoggedin &&
                            <div className="view-cart">
                                <a
                                    className="btn btn-primary btn-sm btn-block text-uppercase float-right btn-backgrnd-check"
                                    onClick={() => checkIsLogin()}>CHECKOUT</a>
                            </div>
                        } {isLoggedin &&
                            <div className="pay-cart">
                                <a
                                    className="btn btn-primary btn-sm btn-block text-uppercase float-right btn-backgrnd"
                                    onClick={() => checkIsLogin()}>PAY</a>
                            </div>
                        }
                    </div>
                    <div className="product-detail">
                        {caltlist}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart;