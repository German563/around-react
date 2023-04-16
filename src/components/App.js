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
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="../src/favicon.ico" />
        <title>Around US</title>
      </head>

      <body>
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
          <ImagePopup onClose={closeAllPopups} card={selectedCard} />
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
            <input
              className="popup__input"
              type="url"
              placeholder="Image link"
            />
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
      </body>
    </html>
  );
}

export default App;
