import React from "react";
import { connect } from "react-redux";

function HomePage() {

  return (
    <div>Home</div>
  );
}

const mapStateToProps = state => (console.log(state),{
});

export default connect(mapStateToProps)(HomePage);
