import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ onAddPlace, isOpen, onClose }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      name='add-place'
      title='Новое место'
      submitText='Создать'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className='popup__field popup__field_type_place-name'
        placeholder='Название'
        name='name'
        id='place-name-input'
        minLength='2'
        maxLength='30'
        value={name}
        onChange={handleNameChange}
        required
      />
      <span className='place-name-input-error popup__input-error'></span>
      <input
        className='popup__field popup__field_type_place-img'
        placeholder='Ссылка на картинку'
        name='link'
        id='place-img-input'
        type='url'
        value={link}
        onChange={handleLinkChange}
        required
      />
      <span className='place-img-input-error popup__input-error'></span>
    </PopupWithForm>
  );
}