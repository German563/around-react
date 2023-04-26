import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isBackPopupOpen, setBackPopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({
    avatar:
      "https://sun6-23.userapi.com/impg/--m7YmJTmQMpm3h4nCZf4am7SBuzaaz7PymRqw/E262OcuUNr8.jpg?size=1024x1024&quality=95&sign=5cb59a271aa0029db51d1702c931eccc&type=album",
    name: "Herman",
    about: "Student",
    _id: "eb9b4fc7dcf52812ff98973c",
  });
  React.useEffect(() => {
    Promise.all([Api.getProfileData()])
      .then(([user]) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

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
  function handleUpdateUser(user) {
    console.log(user);
    Api.editUserProfile(user)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setBackPopupOpen(false);
    setSelectedCard({});
  }
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([Api.getInitialCards()])
      .then((values) => {
        const [initialCards] = values;
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    // Check one more time if this card was already liked
    function updateCards(newCard) {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    }
    if (isLiked) {
      Api.removeLike(card._id)
        .then((newCard) => {
          updateCards(newCard);
        })
        .catch((err) => console.log(err));
    } else {
      Api.changeLikeCardStatus(card._id)
        .then((newCard) => {
          updateCards(newCard);
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardDelete(card) {
    debugger;
    const isOwn = card.owner._id === currentUser._id;
    if (isOwn) {
      Api.removeCard(card._id)
        .then(() => {
          const newCards = cards.filter((c) => c._id !== card._id);
          setCards(newCards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function handleUpdateUser(user) {
    console.log(user);
    Api.editUserProfile(user)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
  }
  function handleUpdateAvatar(avatar) {
    Api.editAvatar(avatar)
      .then((avatar) => setCurrentUser(avatar))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
  }
  function handleAddCard(card) {
    Api.addNewCard(card)
      .then((card) => setCards([card, ...cards]))
      .catch((err) => console.log(err))
      .finally(() => closeAllPopups());
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <div className="page__background"></div>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
            onCardDelete={handleCardDelete}
            onClose={closeAllPopups}
          />
          <Footer />
          <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard}
            isOpen={isBackPopupOpen}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            onClose={closeAllPopups}
            isOpen={isAddPlacePopupOpen}
            onAddPlace={handleAddCard}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
