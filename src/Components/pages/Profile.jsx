import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import '../../App.css';

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const joined = missions.filter((missions) => missions.joined);

  return (
    <div className="profileHolder row container mx-auto">
      <>
        <h2>My Missions</h2>
        <ListGroup className="col-md-6 card">
          {joined.length === 0 ? (
            <p className="nullMessage">No Missions are added 〴</p>
          ) : (
            joined.map(({ missionId, missionName }) => (
              <ListGroup.Item className="item" key={missionId}>{missionName}</ListGroup.Item>
            ))
          )}
        </ListGroup>
      </>
    </div>
  );
}

export default Profile;
