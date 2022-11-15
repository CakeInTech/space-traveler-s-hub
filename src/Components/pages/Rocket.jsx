import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../../Redux/Rockets/Rockets';
import RocketItem from '../RocketItem';

function Rocket() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <main>
      <h2>Rocket&lsquo;s page</h2>
      <div>
        <RocketItem />
      </div>
    </main>
  );
}

export default Rocket;
