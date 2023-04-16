import React from "react";

function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  children,
  submitButtonText,
}) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <form className="popup__container" name={name}>
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__button">
          {submitButtonText}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
