import React from 'react';
import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';

class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="loading-spinner" data-testid="loading-spinner">
        <RotatingLines
          data-testid="RotatingLines"
          strokeColor="grey"
          strokeWidth="3"
          animationDuration="2.2"
          width="100"
          visible={true}
        />
        <div className="spinner-label" data-testid="spinner-label" style={{ color: this.props.labelColor }}> Loading... </div>
      </div>
    );
  }
}

LoadingSpinner.propTypes = {
  labelColor: PropTypes.string.isRequired,
};

export default LoadingSpinner;
