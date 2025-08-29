import React, { useState, useEffect } from 'react';
import { Game } from '@/types';
import FeaturedGames from 'components/FeaturedGames/FeaturedGames';
import AllGames from 'components/AllGames/AllGames';
import styles from './GamePortal.module.css';

interface GamePortalProps {
  id: string;
}

const GamePortal: React.FC<GamePortalProps> = ({ id }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Import the games data
        const gamesData = await import('@/data/games.json');
        setGames(gamesData.default);
      } catch (err) {
        console.error('Failed to load games:', err);
        setError('Failed to load games. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) {
    return (
      <div className={styles.gamePortalContainer}>
        <div className={styles.gamePortalContent}>
          <div className={styles.loadingMessage}>
            Loading games... Please wait.
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.gamePortalContainer}>
        <div className={styles.gamePortalContent}>
          <div className={styles.errorMessage}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.gamePortalContainer}>
      <div className={styles.gamePortalContent}>
        <div className={styles.header}>
          <div className={styles.title}>
            🎮 Retro Game Portal
          </div>
          <div className={styles.subtitle}>
            Discover and play classic games with Windows XP nostalgia
          </div>
        </div>

        <FeaturedGames games={games} />
        
        <AllGames games={games} />

        <div className={styles.footer}>
          <div className={styles.footerTitle}>
            Game Portal v1.0
          </div>
          <div>
            Built with Windows XP styling • Click any game to start playing!
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePortal;