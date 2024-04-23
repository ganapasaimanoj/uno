import { useState } from 'react';
import PlayerSelection from './components/PlayerSelection';
import Card from './components/Card';
import useGetPlayerCards from './hooks/useGetPlayerCards';


export default function App() {
  const [noOfPlayers, setNoOfPlayers] = useState();
  const updateNoOfPlayers = (selectedNoOfPlayers) => setNoOfPlayers(selectedNoOfPlayers);

  if (!noOfPlayers) {
    return <PlayerSelection onSelection={updateNoOfPlayers} />;
  }

  const playerCards = useGetPlayerCards(noOfPlayers);
  // TODO: playerCards will have array of player cards [playerOneCards, playerTwoCards, ...etc]
};