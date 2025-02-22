import React from 'react';

import PokerCard from '@/components/PokerCard';
import { SuitType } from '@/components/PokerCard';

const SUITS: SuitType[] = ['diamond', 'club', 'heart', 'spade'];
const RANKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const generatePairs = () => {
  const pairs = [];

  // Loop through each suit
  for (let suit of SUITS) {
    // Loop through each rank
    for (let rank of RANKS) {
      pairs.push({ suit, rank }); // Create a pair of { suit, rank }
    }
  }

  return pairs;
};

const Home = () => {
  return (
    <div
      style={
        {
          display: 'grid',
          placeItems: 'center',
          height: '100dvh',
        } as React.CSSProperties
      }>
      <div
        style={
          {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
          } as React.CSSProperties
        }>
        {generatePairs().map((pair) => {
          return (
            <PokerCard
              rank={pair.rank}
              suit={pair.suit}
              key={`${pair.rank}-${pair.suit}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
