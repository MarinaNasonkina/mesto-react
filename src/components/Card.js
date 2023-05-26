export default function Card(props) {
  function handleImageClick(card) {
    props.onCardClick(card);
  }

  return (
    <article className='card'>
      <div className='card__image-wrap'>
        <img 
          src={`${props.card.link}`}
          alt={`${props.card.name}`}
          className='card__image'
          onClick={() => handleImageClick(props.card)}
        />
      </div>
      <div className='card__info'>
        <h2 className='card__title'>{props.card.name}</h2>
        <div className='card__likes'>
          <button
            className='card__like-button'
            aria-label='Мне нравится.'
            type='button'
          ></button>
          <p className='card__like-counter'>{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className='card__remove-button'
        aria-label='Удалить место.'
        type='button'
      ></button>
    </article>
  );
}
