import React from 'react';
import { connect } from 'react-redux';

import { signInStart } from '../redux/auth/AuthActions';

const Login = (props) => {
  const { signIn } = props;
  const handleClick = () => {
    signIn({
      userName: 'UAT',
      password: '*****',
    });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleClick}>Sign in</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (userCredential) => dispatch(signInStart(userCredential)),
});

export default connect(null, mapDispatchToProps)(Login);
