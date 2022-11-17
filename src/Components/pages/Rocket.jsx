import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket } from '../../Redux/Rockets/Rockets';
import RocketItem from '../RocketsComponents/RocketItem';
import '../../App.css';

function Rocket() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <main className="rocketHolder">
      <div>
        <RocketItem rockets={rockets} handleReserveRocket={handleReserveRocket} />
      </div>
    </main>
  );
}

export default Rocket;
