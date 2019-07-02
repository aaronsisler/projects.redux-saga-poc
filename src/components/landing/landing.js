import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  requestDecrementCounter,
  requestIncrementCounter
} from "../../actions";
import "./landing.scss";

const Landing = props => (
  <div className="landing">
    <button onClick={props.requestDecrementCounter}>-</button>
    <div>{props.count}</div>
    <button onClick={props.requestIncrementCounter}>+</button>
  </div>
);

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { requestDecrementCounter, requestIncrementCounter },
    dispatch
  );

Landing.propTypes = {
  count: PropTypes.number.isRequired,
  requestDecrementCounter: PropTypes.func.isRequired,
  requestIncrementCounter: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
