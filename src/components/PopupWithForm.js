function PopupWithForm(props) {
  return (
    <>
      <section className={`popup ${props.isOpen ? 'popup_opened' : ''} popup_type_${props.name}`}>
        <div className='popup__container popup__container_for_form'>
          <button
            className='popup__close-button'
            aria-label='Закрыть и отменить изменения.'
            type='button'
            onClick={props.onClose}
          ></button>
          <h2 className='popup__title'>{props.title}</h2>
          <form 
            method='post'
            name={props.name}
            className={`popup__form popup__form_type_${props.name}`}
            noValidate
          >
            {props.children}
            <button type='submit' className='popup__submit-button'>{props.submitText}</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;
