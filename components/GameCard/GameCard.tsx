import React from 'react';
import { Game } from '@/types';
import styles from './GameCard.module.css';
import solitaire from '../../assets/solitaire.png';
import cmd from '../../assets/cmd.png';
import paint from '../../assets/paint.png';
import mycomputer from '../../assets/mycomputer.png';
import mediaplayer from '../../assets/mediaplayer.png';
import ie from '../../assets/ie.png';
import outlook from '../../assets/outlook.png';
import folder from '../../assets/folder.png';

interface GameCardProps {
  game: Game;
  size?: 'small' | 'large';
}

const GameCard: React.FC<GameCardProps> = ({ game, size = 'small' }) => {
  const cardClass = size === 'large' ? styles.gameCardLarge : styles.gameCardSmall;
  const imageClass = size === 'large' ? styles.gameImageLarge : '';
  const nameClass = size === 'large' ? styles.gameNameLarge : '';
  const descClass = size === 'large' ? styles.gameDescriptionLarge : '';

  // Map image strings to actual imported images
  const getGameImage = (imagePath: string) => {
    switch (imagePath) {
      case '/assets/solitaire.png': return solitaire;
      case '/assets/cmd.png': return cmd;
      case '/assets/paint.png': return paint;
      case '/assets/mycomputer.png': return mycomputer;
      case '/assets/mediaplayer.png': return mediaplayer;
      case '/assets/ie.png': return ie;
      case '/assets/outlook.png': return outlook;
      case '/assets/folder.png': return folder;
      default: return null;
    }
  };

  const handlePlayGame = () => {
    window.open(game.link, '_blank', 'noopener,noreferrer');
  };

  const handleViewCode = () => {
    window.open(game.github, '_blank', 'noopener,noreferrer');
  };

  const handleAuthorProfile = () => {
    window.open(game.twitter, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.gameCardContainer}>
      {game.featured && <div className={styles.featuredBadge}>Featured</div>}
      <div className={`${styles.gameCard} ${cardClass}`}>
        <div className={`${styles.gameImage} ${imageClass}`}>
          {getGameImage(game.image) ? (
            <img src={getGameImage(game.image)?.src} alt={game.name} />
          ) : (
            <div className={styles.gameImagePlaceholder}>
              No Image Available
            </div>
          )}
        </div>
        
        <div className={`${styles.gameName} ${nameClass}`}>
          {game.name}
        </div>
        
        <div className={`${styles.gameDescription} ${descClass}`}>
          {game.description}
        </div>
        
        <div className={styles.gameAuthor}>
          By {game.authorName}
        </div>
        
        <div className={styles.gameActions}>
          <button 
            className={`${styles.gameButton} ${styles.playButton}`}
            onClick={handlePlayGame}
          >
            Play Game
          </button>
          <button 
            className={styles.gameButton}
            onClick={handleViewCode}
          >
            View Code
          </button>
          <button 
            className={styles.gameButton}
            onClick={handleAuthorProfile}
          >
            Author
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;