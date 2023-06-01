import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick }) {
  function handleImageClick(card) {
    onCardClick(card);
  }
  const user = useContext(CurrentUserContext);
  const isOwn = card.owner._id === user._id;
  const isLiked = card.likes.some(like => like._id === user._id);
  const classNameLikeButton = `card__like-button ${isLiked && "card__like-button_active"}`;

  return (
    <article className='card'>
      <div className='card__image-wrap'>
        <img 
          src={`${card.link}`}
          alt={`${card.name}`}
          className='card__image'
          onClick={() => handleImageClick(card)}
        />
      </div>
      <div className='card__info'>
        <h2 className='card__title'>{card.name}</h2>
        <div className='card__likes'>
          <button
            className={classNameLikeButton}
            aria-label='Мне нравится.'
            type='button'
          ></button>
          <p className='card__like-counter'>{card.likes.length}</p>
        </div>
      </div>
      {isOwn && (
        <button
          className="card__remove-button"
          aria-label="Удалить место."
          type="button"
        ></button>
      )}
    </article>
  );
}
