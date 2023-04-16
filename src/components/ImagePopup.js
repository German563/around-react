function ImagePopup({ card, onClose }) {
  const { _id, link, name } = card;

  return (
    <div
      className={`popup popup_type_foto ${_id ? "popup_opened" : ""}`}
      style={{ backgroundImage: `url(${link})` }}
    >
      <button
        className="popup__close"
        id="closeButtonFoto"
        onClick={onClose}
      ></button>
      <div className="popup__content">
        <h3 className="popup__title-foto">{name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
