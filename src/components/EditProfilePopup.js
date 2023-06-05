import { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';
import useAdditionalClosePopup from '../utils/useAdditionalClosePopup';

export default function EditProfilePopup({
  onUpdateUser,
  isOpen,
  onClose,
  isLoading,
}) {
  const user = useContext(CurrentUserContext);
  const [name, setName] = useState(user.name);
  const [description, setDescription] = useState(user.about);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    if (isOpen) {
      setName(user.name);
      setDescription(user.about);
    }
  }, [isOpen, user]);

  useAdditionalClosePopup(isOpen, onClose);

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      submitText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        className='popup__field popup__field_type_name'
        placeholder='Имя'
        name='name'
        id='profile-name-input'
        minLength='2'
        maxLength='40'
        value={name || ''}
        onChange={handleNameChange}
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
        value={description || ''}
        onChange={handleDescriptionChange}
        required
      />
      <span className='profile-about-input-error popup__input-error'></span>
    </PopupWithForm>
  );
}