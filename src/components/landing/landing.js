import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  requestDecrementCounter,
  requestIncrementCounter,
  requestRetrieveData,
  requestSaveData
} from "../../actions";
import "./landing.scss";

const Landing = props => (
  <div className="landing">
    <div className="landing__counter">
      <button onClick={props.requestDecrementCounter}>-</button>
      <div>{props.count}</div>
      <button onClick={props.requestIncrementCounter}>+</button>
    </div>
    <div className="landing__notifications">
      <div>Success: {props.notification.success}</div>
      <div>Error: {props.notification.error}</div>
    </div>
    <div className="landing__retrieve-data">
      <button onClick={props.requestRetrieveData}>Request status</button>
    </div>
    <div className="landing__save-data">
      <button onClick={props.requestSaveData}>Save the data</button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter,
  notification: state.notification
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestDecrementCounter,
      requestIncrementCounter,
      requestRetrieveData,
      requestSaveData
    },
    dispatch
  );

Landing.propTypes = {
  count: PropTypes.number.isRequired,
  notification: PropTypes.object.isRequired,
  requestDecrementCounter: PropTypes.func.isRequired,
  requestIncrementCounter: PropTypes.func.isRequired,
  requestRetrieveData: PropTypes.func.isRequired,
  requestSaveData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
