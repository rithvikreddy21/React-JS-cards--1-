import React from 'react';

const CricketPlayerCard = ({ player }) => {
  return (
    <div className="cricket-player-card">
      <img src={player.image} alt={player.name} />
      <h2>{player.name}</h2>
      <p><strong>Country: </strong>{player.country}</p>
      <p><strong>Age: </strong>{player.age}</p>
      <p><strong>Role: </strong>{player.role}</p>
      <p><strong>Batting Style: </strong>{player.battingStyle}</p>
      <p><strong>Bowling Style: </strong>{player.bowlingStyle}</p>
    </div>
  );
};

export default CricketPlayerCard;