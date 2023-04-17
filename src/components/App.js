import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import React from "react";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isBackPopupOpen, setBackPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setBackPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setBackPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="body">
      <div className="page">
        <div className="page__background"></div>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
          isOpen={isBackPopupOpen}
        />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="edit-profile"
          title="Edit profile"
          submitButtonText="Save"
        >
          <input className="popup__input" type="text" placeholder="Name" />
          <input
            className="popup__input"
            type="text"
            placeholder="Profession"
          />
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="add-card"
          title="New place"
          submitButtonText="Save"
        >
          <input className="popup__input" type="text" placeholder="Title" />
          <input className="popup__input" type="url" placeholder="Image link" />
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar"
          title="Change profile picture"
          submitButtonText="Save"
        >
          <input
            className="popup__input popup__input_type_avatar-link"
            type="url"
            name="avatar"
            placeholder="Avatars Image link"
          />
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
