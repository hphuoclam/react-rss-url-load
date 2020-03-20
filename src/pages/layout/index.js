import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Container>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
        </ul>
        {children}
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Layout);
