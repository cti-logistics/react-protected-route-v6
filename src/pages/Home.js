import React from 'react';
import { connect } from 'react-redux';
import { signOutStart } from '../redux/auth/AuthActions';

const Home = (props) => {
  const { signOut } = props;

  const handleClick = () => {
    signOut();
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleClick}>Sign out</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(null, mapDispatchToProps)(Home);
