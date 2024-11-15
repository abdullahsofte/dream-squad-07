import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({ players, handleSelectedPlayers }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-56">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          handleSelectedPlayers={handleSelectedPlayers}
        ></Player>
      ))}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired,
  handleSelectedPlayers: PropTypes.func.isRequired,
};
export default Players;
