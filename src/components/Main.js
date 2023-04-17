import React from "react";
import plus from "../images/plus.svg";
import Api from "../utils/Api.js";
import Card from "./Card.js";
import pencil from "../images/pencil.svg";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([Api.getProfileData(), Api.getInitialCards()])
      .then((data) => {
        const [userInfo, initialCards] = data;
        const { name, about, avatar } = userInfo;
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className="main">
      <section className="gallery">
        <div className="gallery__text">
          <div
            className="gallery__image"
            style={{ backgroundImage: `url(${userAvatar})` }}
            onClick={props.onEditAvatar}
          >
            <img className="gallery__newImage" src={pencil} alt="pencil" />
          </div>

          <div className="gallery__wrapper gallery__eclipsis">
            <div className="gallery__column">
              <h1 className="gallery__header">{userDescription}</h1>

              <button
                className="gallery__pencil"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="gallery__subtext">{userName}</p>
          </div>
          <button
            className="gallery__button"
            onClick={props.onAddPlace}
            type="button"
          >
            <img src={plus} alt="header__logo" />
          </button>
        </div>
      </section>
      <section className="card">
        <ul className="card__area">
          {cards.map((item) => (
            <Card card={item} key={item._id} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
