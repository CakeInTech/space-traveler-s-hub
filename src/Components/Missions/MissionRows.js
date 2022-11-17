import React from 'react';
import PropTypes from 'prop-types';
import * as ReactBootStrap from 'react-bootstrap';
import MissionData from './MissionData';
import styles from './missions.module.css';

const MissionRows = ({ missions, handleJoinMission }) => (
  <>
    <div>
      <ReactBootStrap.Table
        responsive="sm"
        striped
        bordered
        size="lg"
        className={styles.tableContainer}
      >
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className={styles.status}>Status</th>
            <th className={styles.reserve}>Reserve</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(
            ({
              missionId: id,
              missionName,
              description,
              joined,
            }) => (
              <MissionData
                key={id}
                id={id}
                missionName={missionName}
                description={description}
                handleJoinMission={handleJoinMission}
                joined={joined}
              />
            ),
          )}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  </>
);

MissionRows.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      missionId: PropTypes.string,
      missionName: PropTypes.string,
      description: PropTypes.string,
      joined: PropTypes.bool,
    }),
  ).isRequired,
  handleJoinMission: PropTypes.func.isRequired,
};
export default MissionRows;
