import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name='edit-avatar'
        title='Обновить аватар'
        submitText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className='popup__field popup__field_type_avatar'
          placeholder='Ссылка на картинку'
          name='avatar'
          id='profile-avatar-input'
          type='url'
          required
        />
        <span className='profile-avatar-input-error popup__input-error'></span>
      </PopupWithForm>
      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        submitText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className='popup__field popup__field_type_name'
          placeholder='Имя'
          name='name'
          id='profile-name-input'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='profile-name-input-error popup__input-error'></span>
        <input
          className='popup__field popup__field_type_about'
          placeholder='О себе'
          name='about'
          id='profile-about-input'
          minLength='2'
          maxLength='200'
          required
        />
        <span className='profile-about-input-error popup__input-error'></span>
      </PopupWithForm>
      <PopupWithForm
        name='add-place'
        title='Новое место'
        submitText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className='popup__field popup__field_type_place-name'
          placeholder='Название'
          name='name'
          id='place-name-input'
          minLength='2'
          maxLength='30'
          required
        />
        <span className='place-name-input-error popup__input-error'></span>
        <input
          className='popup__field popup__field_type_place-img'
          placeholder='Ссылка на картинку'
          name='link'
          id='place-img-input'
          type='url'
          required
        />
        <span className='place-img-input-error popup__input-error'></span>
      </PopupWithForm>
      <PopupWithForm
        name='confirmation'
        title='Вы уверены?'
        submitText='Да'
      />
      <ImagePopup />
    </>
  );
}
