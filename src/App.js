import React, { useState } from 'react';
import logo from './asset/logo.png';
import './App.css';
import PLP from './Components/plp';
import LOGIN from './Components/loginPage';
import { useDispatch, useSelector } from 'react-redux';
// import download from '../public/'
import { loginform } from './Store/action/login';
import Cart from './Components/cart.js'

function App() {
  const dispatch = useDispatch();
  const [viewCart, setViewCart] = useState(false)
  const { addToCart } = useSelector(
    state => ({
      addToCart: state.addToCart.dataCount,
    })
  );
  const { loggedinUser } = useSelector(
    state => ({
      loggedinUser: state.login.loginSuccess
    })
  );

  const {loginFail} = useSelector(
    state=>({
      loginFail: state.login.loginFailure
    })
  );
  return (
    <div className="App">
      <header>
        <nav style={{ position: 'sticky' }} className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <div ><img src={logo} style={{ width: '100px' }} alt='' /> </div>
            </div>
            {(loginFail === false && loggedinUser.loginSuccess === true) &&
              <div>
                <p>Welcome {loggedinUser.userName} </p>
              </div>
            }
            <div className="navbar-login">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setViewCart(!viewCart)}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    {addToCart.length !== 0 &&
                      <div className="cart-qty button--pluse">{addToCart.length}</div>
                    }
                  </a>
                </li>
                <li className="nav-item">
                  {(loginFail === false && loggedinUser.loginSuccess === true)&&
                    <a className="nav-link" style={{ cursor: 'pointer' }}>
                      <i className="fa fa-user-o" aria-hidden="false" ></i></a>
                  }
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => dispatch(loginform())}>
                    <i className="fa fa-sign-in" aria-hidden="true" ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {viewCart &&
          addToCart.length !== 0 &&
          <Cart />
        }
      </header>
      <div className="p-5 text-center bg-light">

        <PLP />
        <LOGIN />
      </div>
    </div>
  );
}

export default App;
