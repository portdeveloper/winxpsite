import React from 'react';
import { Game } from '@/types';
import GameCard from '../GameCard/GameCard';
import styles from './AllGames.module.css';

interface AllGamesProps {
  games: Game[];
}

const AllGames: React.FC<AllGamesProps> = ({ games }) => {
  return (
    <div className={styles.allGamesSection}>
      <div className={styles.sectionTitle}>
        🎮 All Games
      </div>
      
      {games.length > 0 && (
        <div className={styles.gameCount}>
          Showing {games.length} game{games.length !== 1 ? 's' : ''}
        </div>
      )}
      
      {games.length > 0 ? (
        <div className={styles.gamesGrid}>
          {games.map((game) => (
            <GameCard 
              key={game.id} 
              game={game} 
              size="small" 
            />
          ))}
        </div>
      ) : (
        <div className={styles.noGames}>
          No games available at the moment. Check back later for new additions!
        </div>
      )}
    </div>
  );
};

export default AllGames;