import React from 'react';
import PropTypes from 'prop-types';
import RocketData from './RocketData';

const RocketItem = ({ rockets, handleReserveRocket }) => (
  <>
    {
      rockets.map((rocket) => (
        <RocketData
          key={rocket.rocketId}
          rocketId={rocket.rocketId}
          rocketImage={rocket.rocketImage}
          rocketName={rocket.rocketName}
          rocketType={rocket.rocketType}
          handleReserveRocket={handleReserveRocket}
          reserve={rocket.reserve}
        />
      ))
    }
  </>
);

RocketItem.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    rocketId: PropTypes.string,
    rocketName: PropTypes.string,
    rocketType: PropTypes.string,
    reserve: PropTypes.bool,
  })).isRequired,
  handleReserveRocket: PropTypes.func.isRequired,
};

export default RocketItem;
