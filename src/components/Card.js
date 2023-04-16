function Card({ card, onCardClick }) {
  const { name, link, likes } = card;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card__gallery">
      <div className="card__wrapper">
        <button
          type="button"
          id="deleteButton"
          className="card__delete-button"
        ></button>
        <img
          id="myImage"
          className="card__image"
          src={link}
          alt={name}
          onClick={handleClick}
        />
      </div>
      <div className="card__text">
        <h2 className="card__ellipsis">{name}</h2>
        <button id="heart" className="card__button card__background"></button>
      </div>
      <span className="card__likes">{likes.length}</span>
    </li>
  );
}

export default Card;
