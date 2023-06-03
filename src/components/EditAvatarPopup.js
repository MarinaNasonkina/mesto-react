import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import useAdditionalClosePopup from '../utils/useAdditionalClosePopup';

export default function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose, isLoading }) {
  const avatar = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatar.current.value });
    avatar.current.value = '';
  }

  function handleCloseWithoutSubmit() {
    onClose();
    avatar.current.value = '';
  }

  useAdditionalClosePopup(handleCloseWithoutSubmit);

  return (
    <PopupWithForm
      name='edit-avatar'
      title='Обновить аватар'
      submitText='Сохранить'
      isOpen={isOpen}
      onClose={handleCloseWithoutSubmit}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        className='popup__field popup__field_type_avatar'
        placeholder='Ссылка на картинку'
        name='avatar'
        id='profile-avatar-input'
        type='url'
        ref={avatar}
        required
      />
      <span className='profile-avatar-input-error popup__input-error'></span>
    </PopupWithForm>
  );
}
