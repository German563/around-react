import plus from '../images/plus.svg';
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";

function handleEditProfileClick() {
  const popup = document.querySelector(".popup_type_edit-profile");
  popup.classList.add("popup_opened");
}
function handleAddPlaceClick() {
  const popup = document.querySelector(".popup_type_add-card");
  popup.classList.add("popup_opened");
}
function handleEditAvatarClick() {
  const popup = document.querySelector(".popup_type_avatar");
  popup.classList.add("popup_opened");
}

function Main() {

    return (

        <main className="main">
        <section className="gallery">
          <div className="gallery__text">
            <div className="gallery__image" 
            onClick={handleEditAvatarClick}
            >
              <img
                className="gallery__newImage"
                src="<%= require('../src/images/pencil.svg') %>"
                alt=""
              />
            </div>

            <div className="gallery__wrapper gallery__eclipsis">
              <div className="gallery__column">
                <h1 className="gallery__header">Jacques Cousteau</h1>

            <button className="gallery__pencil" type="button" 
            onClick={handleEditProfileClick}
            ></button>

              </div>
              <p className="gallery__subtext">Explorer</p>
            </div>
            <button className="gallery__button" 
            onClick={handleAddPlaceClick} 
            type="button">
              <img
                        src={plus}
                        alt="header__logo"
              
              />

            </button>
          </div>
        </section>
        <section className="card">
          <ul className="card__area"></ul>
          <template id="card-template">
            <li className="card__gallery">
              <div className="card__wrapper">
                <button
                  type="button"
                  id="deleteButton"
                  className="card__delete-button"
                ></button>
                <img id="myImage" className="card__image" src="none" />
              </div>
              <div className="card__text">
                <h2 className="card__ellipsis"></h2>
                <button
                  id="heart"
                  className="card__button card__background"
                ></button>
              </div>
              <span className="card__likes"></span>
            </li>
          </template>
        </section>
        <PopupWithForm 
        
  name="edit-profile" 
  title="Edit profile" 
  submitButtonText="Save" 
  
>
  <input className='popup__input' type="text" placeholder="Name" />
  <input className='popup__input' type="email" placeholder="Email" />
  
</PopupWithForm>

<PopupWithForm 
// isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} 
  name="add-card" 
  title="New place" 
  submitButtonText="Save" 

>
  <input className='popup__input' type="text" placeholder="Title" />
  <input className='popup__input' type="url" placeholder="Image link" />
</PopupWithForm>

<PopupWithForm 
// isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
  name="avatar" 
  title="Change profile picture" 
  submitButtonText="Save" 

>
  <input className='popup__input' type="url" placeholder="Avatars Image link" />
</PopupWithForm>
<ImagePopup></ImagePopup>
      </main>

  );
  
}
export default Main