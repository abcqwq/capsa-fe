'use client';
import React from 'react';
import styled from 'styled-components';

import { Delius } from 'next/font/google';

const pokerCardFont = Delius({
  subsets: ['latin'],
  weight: ['400'],
});

export type SuitType = 'diamond' | 'club' | 'heart' | 'spade';
type SuitIllustType = '♦️' | '♣️' | '♥️' | '♠️';
type ColorType = '--color-red' | '--color-purple';

const colorMapper = (suit: SuitType): ColorType => {
  if (['diamond', 'heart'].includes(suit)) {
    return '--color-red';
  }

  return '--color-purple';
};

const suitEmojiMapper = (suit: SuitType): SuitIllustType => {
  if (suit == 'diamond') {
    return '♦️';
  }

  if (suit == 'club') {
    return '♣️';
  }

  if (suit == 'heart') {
    return '♥️';
  }

  return '♠️';
};

const numberToRank = (rank: number): string => {
  if (rank < 1 || rank > 13) {
    throw new Error('Card rank is out of bound.');
  }

  if (rank == 1) {
    return 'A';
  }

  if (rank == 11) {
    return 'J';
  }

  if (rank == 12) {
    return 'Q';
  }

  if (rank == 13) {
    return 'K';
  }

  return rank.toString();
};

type Props = {
  rank: number;
  suit: SuitType;
};

const PokerCard = ({ rank, suit }: Props) => {
  return (
    <Layout
      className={pokerCardFont.className}
      style={
        {
          '--base-color': `var(${colorMapper(suit)})`,
        } as React.CSSProperties
      }>
      <CardInfo>
        <RankContainer>{numberToRank(rank)}</RankContainer>
        <SuitContainer>{suitEmojiMapper(suit)}</SuitContainer>
      </CardInfo>
      <IllustrationContainer>
        {numberToRank(rank)}
      </IllustrationContainer>
    </Layout>
  );
};

const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  border: 2px solid var(--color-text);
  border-radius: 4px;
  padding: 8px;

  color: var(--base-color);
  width: 157px;
  height: 220px;
`;

const CardInfo = styled.section`
  display: flex;
  flex-direction: column;
`;

const RankContainer = styled.div`
  line-height: 1;
  font-size: ${1.75 * 16}px;

  // to center with the suit container optically
  // cause it seems like that emoji has its own inner padding/margin?
  padding-left: 4px;
`;

const SuitContainer = styled.div`
  line-height: 2;
  font-size: ${1.25 * 16}px;
`;

const IllustrationContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;

  line-height: 1;
  font-size: ${3 * 16}px;
  padding-right: 4px;
`;

export default PokerCard;
