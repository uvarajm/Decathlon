import React, { useState } from 'react';
import userDetails from '../Mock/userDetails.json';
import { login, loginform, loginfail } from '../Store/action/login';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';

// Login page implementation
const LOGIN = () => {
  const dispatch = useDispatch();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { logform } = useSelector(
    state => ({
      logform: state.login.enable,
    })
  );
  const { logfail } = useSelector(
    state => ({
      logfail: state.login.loginFailure
    })
  );
  const validateUser = () => {
    // validate username and password details 
    var userNameExist = JSON.stringify(userDetails).includes(userName)
    if (userNameExist) {
      var check = userDetails.filter((item) => item.username === userName && item.password === password)
      if (check.length !== 0) {
        dispatch(login(true, userName));
        dispatch(loginfail(false));
        dispatch(loginform());
      } else {
        dispatch(login(false, ''))
        dispatch(loginfail(true));
      }

    } else {
      dispatch(login(false, ''));
      dispatch(loginfail(true));
    }
  }

  return (
    <React.Fragment>
      <Modal
        size="sm"
        show={logform}
        onHide={() => dispatch(loginform())}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            LOGIN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login-form" >
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" required="required"
                value={userName}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" required="required"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" onClick={() => validateUser()}>Log in</button>
              {logfail &&
                <p style={{ color: "red", fontSize: '10px', textAlign: 'center', marginTop: '10px' }}>Please provide valid credentials</p>
              }
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
export default LOGIN;