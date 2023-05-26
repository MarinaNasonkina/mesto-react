export default function ImagePopup(props) {
  return (
    <section
      className={`popup ${props.isOpen ? 'popup_opened' : ''} popup_type_full-screen-place`}
      aria-label='Место на весь экран.'
    >
      <div className='popup__container popup__container_for_place'>
        <button
          className='popup__close-button'
          aria-label='Закрыть.'
          type='button'
          onClick={props.onClose}
        ></button>
        <img src={`${props.card.link}`} alt={`${props.card.name}`} className='popup__image' />
        <p className='popup__subtitle'>{props.card.name}</p>
      </div>
    </section>
  );
}
