import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import styles from './missions.module.css';

const MissionData = ({
  id,
  missionName,
  description,
  handleJoinMission,
  joined,
}) => (
  <tr key={id}>
    <td>{missionName}</td>
    <td>{description}</td>
    <td className={styles.statusData}>
      <Button variant={joined ? 'primary' : 'secondary'} size="sm" type="button" disabled>
        { joined ? 'Active Member' : 'NOT A MEMBER'}
      </Button>
    </td>
    <td className={styles.reserveData}>
      <Button onClick={() => handleJoinMission(id)} variant={joined ? 'outline-danger' : 'outline-secondary'} type="button" size="sm">
        {joined ? 'Leave Mission' : 'Join Mission'}
      </Button>
    </td>
  </tr>
);

MissionData.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleJoinMission: PropTypes.func.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default MissionData;
