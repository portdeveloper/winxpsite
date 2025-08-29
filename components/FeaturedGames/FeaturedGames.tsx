import React from 'react';
import { Game } from '@/types';
import GameCard from '../GameCard/GameCard';
import styles from './FeaturedGames.module.css';

interface FeaturedGamesProps {
  games: Game[];
}

const FeaturedGames: React.FC<FeaturedGamesProps> = ({ games }) => {
  const featuredGames = games.filter(game => game.featured);

  return (
    <div className={styles.featuredSection}>
      <div className={styles.sectionTitle}>
        ⭐ Featured Games
      </div>
      
      {featuredGames.length > 0 ? (
        <div className={styles.featuredGamesContainer}>
          {featuredGames.map((game) => (
            <GameCard 
              key={game.id} 
              game={game} 
              size="large" 
            />
          ))}
        </div>
      ) : (
        <div className={styles.noFeaturedGames}>
          No featured games available at the moment.
        </div>
      )}
    </div>
  );
};

export default FeaturedGames;