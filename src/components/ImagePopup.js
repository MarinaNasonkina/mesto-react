export default function ImagePopup() {
  return (
    <section
      className='popup popup_type_full-screen-place'
      aria-label='Место на весь экран.'
    >
      <div className='popup__container popup__container_for_place'>
        <button
          className='popup__close-button'
          aria-label='Закрыть.'
          type='button'
        ></button>
        <img src='#' alt='' className='popup__image' />
        <p className='popup__subtitle'></p>
      </div>
    </section>
  );
}
