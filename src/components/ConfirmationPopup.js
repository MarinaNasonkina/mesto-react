import PopupWithForm from './PopupWithForm';

export default function ConfirmationPopup({ card, onCardDelete, isOpen, onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm 
      name='confirmation'
      title='Вы уверены?'
      submitText='Да'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}
