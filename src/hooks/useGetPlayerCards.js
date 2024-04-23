import { useState, useEffect, useMemo, useCallback } from 'react';
import { getCards } from '../utils';

export default function useGetPlayerCards(noOfPlayers) {
    const [playerCards, setPlayerCards] = useState([]);

    useEffect(() => {
        if (noOfPlayers > 1) {
            const cards = getCards();
            // TODO: shuffle cards
            // TODO: if 2 players - pick a chunk of 10 for 2.
            // TODO: if 2+ players - pick a chunk of 7.
            // TODO: setPlayerCards([playerOneChunk, playerTwoChunk, ...etc])
        }
    }, [noOfPlayers]);

    return playerCards;
};