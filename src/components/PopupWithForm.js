import React, { useState } from 'react';

function PopupWithForm(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleTogglePopup() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''} popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" aria-label="Close popup" className="popup__close" onClick={handleTogglePopup}></button>
        <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__submit-button">
            {props.submitButtonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
