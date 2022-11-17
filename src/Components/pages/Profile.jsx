import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import '../../App.css';

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const joined = missions.filter((missions) => missions.joined);

  const rockets = useSelector((state) => state.rockets.rockets);
  const reserveRocket = rockets.filter((rockets) => rockets.reserve);

  return (
    <div className="profileHolder row container mx-auto">
      <div className="col-md-6 card">
        <h2>My Missions</h2>
        <ListGroup>
          {joined.length === 0 ? (
            <p className="nullMessage">No Missions are added 〴</p>
          ) : (
            joined.map(({ missionId, missionName }) => (
              <ListGroup.Item className="item" key={missionId}>{missionName}</ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>

      <div className="col-md-6 card">
        <h2>My Rockets</h2>
        <ListGroup>
          { reserveRocket.length === 0 ? (
            <p className="nullMessage"> No Rockets Added  </p>
          ) : (
            reserveRocket.map(({
              rocketId, rocketName,
            }) => (
              <ListGroup.Item className="item" key={rocketId}>{rocketName}</ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>
    </div>
  );
}

export default Profile;
