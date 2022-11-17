import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, getMission } from '../../Redux/missions/missions';
import MissionRows from '../Missions/MissionRows';
import '../../App.css';

function Mission() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  const handleJoinMission = (id) => {
    dispatch(getMission(id));
  };

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="missionHolder">
      <MissionRows missions={missions} handleJoinMission={handleJoinMission} />
    </div>
  );
}

export default Mission;
