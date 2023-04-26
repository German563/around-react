import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link,
    });
    setName("");
    setLink("");
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeLink(e) {
    setLink(e.target.value);
  }
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="add-card"
      title="New place"
      submitButtonText="Save"
    >
      <input
        className="popup__input"
        type="text"
        placeholder="Title"
        onChange={handleChangeName}
      />
      <input
        className="popup__input"
        type="url"
        placeholder="Image link"
        onChange={handleChangeLink}
      />
    </PopupWithForm>
  );
}
export default AddPlacePopup;
