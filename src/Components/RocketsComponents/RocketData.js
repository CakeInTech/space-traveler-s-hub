import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './RocketsCss/RocketData.module.css';

const RocketData = ({
  rocketId, rocketName, rocketImage, rocketType, handleReserveRocket, reserve,
}) => (
  <>
    <Card className={styles.container}>
      <div>
        <Card.Img className={styles.image} src={rocketImage} alt={rocketName} />
      </div>

      <Card.Body>
        <Card.Title>{rocketName}</Card.Title>
        <Card.Text className={styles.description}>
          <Button
            disabled
            variant={reserve ? 'primary' : null}
            style={reserve ? {
              display: 'inline-block',
              backgroundColor: '#18A2B8',
              height: '2rem',
              borderRadius: '3px',
              border: 'none',
              opacity: '1',
              margin: '0 8px',
              fontSize: '15px',
              padding: '1px 8px',
            } : { display: 'none' }}
          >
            {reserve ? 'Reserved' : null}

          </Button>
          {rocketType}
        </Card.Text>
        <Button variant={reserve ? 'outline-secondary' : 'primary'} type="button" onClick={() => handleReserveRocket(rocketId)}>{reserve ? 'Cancel Reservation' : 'Reserve Rocket'}</Button>
      </Card.Body>
    </Card>
  </>

);

RocketData.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketType: PropTypes.string.isRequired,
  reserve: PropTypes.bool.isRequired,
  handleReserveRocket: PropTypes.func.isRequired,
};

export default RocketData;
