import React from 'react';
import api from '../utils/api';

export default function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserData(),
      api.getInitialCards()
    ])
      .then(([userData, initialCards]) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setCards(initialCards);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <>
      <main className='content'>
        <section className='profile'>
          <div className='profile__info'>
            <img
              src={`${userAvatar}`}
              alt='Аватар профиля.'
              className='profile__avatar'
            />
            <button
              onClick={props.onEditAvatar}
              className='profile__avatar-button'
              aria-label='Сменить аватар.'
              type='button'
            ></button>
            <div className='profile__description'>
              <h1 className='profile__name'>{userName}</h1>
              <button
                onClick={props.onEditProfile}
                className='profile__edit-button'
                aria-label='Редактировать профиль.'
                type='button'
              ></button>
              <p className='profile__about'>{userDescription}</p>
            </div>
          </div>
          <button
            onClick={props.onAddPlace}
            className='profile__add-button'
            aria-label='Добавить место.'
            type='button'
          ></button>
        </section>
        <section className='cards' aria-label='Фотогалерея.'>
          {cards.map(card => (
            <article className='card'>
                <div className='card__image-wrap'>
                  <img src={`${card.link}`} alt={`${card.name}`} className='card__image' />
                </div>
                <div className='card__info'>
                  <h2 className='card__title'>{card.name}</h2>
                  <div className='card__likes'>
                    <button
                      className='card__like-button'
                      aria-label='Мне нравится.'
                      type='button'
                    ></button>
                    <p className='card__like-counter'>{card.likes.length}</p>
                  </div>
                </div>
                <button
                  className='card__remove-button'
                  aria-label='Удалить место.'
                  type='button'
                ></button>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
