import { useState, useEffect } from 'react';
import Card from './Card';
import api from '../utils/api';

export default function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick
  }) {
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
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
              onClick={onEditAvatar}
              className='profile__avatar-button'
              aria-label='Сменить аватар.'
              type='button'
            ></button>
            <div className='profile__description'>
              <h1 className='profile__name'>{userName}</h1>
              <button
                onClick={onEditProfile}
                className='profile__edit-button'
                aria-label='Редактировать профиль.'
                type='button'
              ></button>
              <p className='profile__about'>{userDescription}</p>
            </div>
          </div>
          <button
            onClick={onAddPlace}
            className='profile__add-button'
            aria-label='Добавить место.'
            type='button'
          ></button>
        </section>
        <section className='cards' aria-label='Фотогалерея.'>
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </section>
      </main>
    </>
  );
}
