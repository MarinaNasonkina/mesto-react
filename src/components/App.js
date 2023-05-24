import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <section className='popup popup_type_edit-avatar'>
        <div className='popup__container popup__container_for_form'>
          <button
            className='popup__close-button'
            aria-label='Закрыть и отменить изменения.'
            type='button'
          ></button>
          <h2 className='popup__title'>Обновить аватар</h2>
          <form
            method='post'
            name='editAvatar'
            className='popup__form popup__form_type_edit-avatar'
            noValidate
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
            <button type='submit' className='popup__submit-button'>Сохранить</button>
          </form>
        </div>
      </section>
      <section className='popup popup_type_edit-profile'>
        <div className='popup__container popup__container_for_form'>
          <button
            className='popup__close-button'
            aria-label='Закрыть и отменить изменения.'
            type='button'
          ></button>
          <h2 className='popup__title'>Редактировать профиль</h2>
          <form
            method='post'
            name='editProfile'
            className='popup__form popup__form_type_edit-profile'
            noValidate
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
            <button type='submit' className='popup__submit-button'>Сохранить</button>
          </form>
        </div>
      </section>
      <section className='popup popup_type_add-place'>
        <div className='popup__container popup__container_for_form'>
          <button
            className='popup__close-button'
            aria-label='Закрыть и отменить изменения.'
            type='button'
          ></button>
          <h2 className='popup__title'>Новое место</h2>
          <form
            method='post'
            name='addPlace'
            className='popup__form popup__form_type_add-place'
            noValidate
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
            <button type='submit' className='popup__submit-button'>Создать</button>
          </form>
        </div>
      </section>
      <section className='popup popup_type_confirmation'>
        <div className='popup__container popup__container_for_form'>
          <button
            className='popup__close-button'
            aria-label='Закрыть.'
            type='button'
          ></button>
          <h2 className='popup__title'>Вы уверены?</h2>
          <form
            method='post'
            name='deletePlace'
            className='popup__form popup__form_type_confirm'
            noValidate
          >
            <button type='submit' className='popup__submit-button'>Да</button>
          </form>
        </div>
      </section>
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
      <template className='card-template'>
        <article className='card'>
          <div className='card__image-wrap'>
            <img src='#' alt='' className='card__image' />
          </div>
          <div className='card__info'>
            <h2 className='card__title'></h2>
            <div className='card__likes'>
              <button
                className='card__like-button'
                aria-label='Мне нравится.'
                type='button'
              ></button>
              <p className='card__like-counter'></p>
            </div>
          </div>
          <button
            className='card__remove-button'
            aria-label='Удалить место.'
            type='button'
          ></button>
        </article>
      </template>
    </>
  );
}

export default App;
