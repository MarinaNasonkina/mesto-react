function Main(props) {
  return (
    <>
      <main className='content'>
        <section className='profile'>
          <div className='profile__info'>
            <img
              src='#'
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
              <h1 className='profile__name'>...</h1>
              <button
                onClick={props.onEditProfile}
                className='profile__edit-button'
                aria-label='Редактировать профиль.'
                type='button'
              ></button>
              <p className='profile__about'></p>
            </div>
          </div>
          <button
            onClick={props.onAddPlace}
            className='profile__add-button'
            aria-label='Добавить место.'
            type='button'
          ></button>
        </section>
        <section className='cards' aria-label='Фотогалерея.'></section>
      </main>
    </>
  );
}

export default Main;
