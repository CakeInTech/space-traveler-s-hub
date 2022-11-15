import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../../Redux/missions/missions';
import MissionList from '../MissionItems';

function Mission() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <MissionList />
    </div>
  );
}

export default Mission;
