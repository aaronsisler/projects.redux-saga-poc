import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./saved-container.scss";

const SavedContainer = props => (
  <div className="saved-container">
    <div>Success: {props.notification.success}</div>
    <div>Error: {props.notification.error}</div>
  </div>
);

const mapStateToProps = state => ({
  notification: state.notification
});

SavedContainer.propTypes = {
  notification: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(SavedContainer);
