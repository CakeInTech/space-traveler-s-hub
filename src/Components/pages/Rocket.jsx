import React from 'react';
import RocketItem from '../RocketItem';

function Rocket() {
  const rockets = [
    {
      id: 0,
      name: 'name-1',
      image: 'img-1',
      description: 'details-1',
    },
    {
      id: 2,
      name: 'name-2',
      image: 'img-2',
      description: 'details-2',
    },
    {
      id: 3,
      name: 'name-3',
      image: 'img-3',
      description: 'details-3',
    },
  ];
  return (
    <main>
      <h2>Rocket&lsquo;s page</h2>
      <div>
        {
          rockets.map((rocket) => (
            <RocketItem key={rocket.id} rocket={rocket} />
          ))
        }
      </div>
    </main>
  );
}

export default Rocket;
