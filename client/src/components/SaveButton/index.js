import React from "react";
import "./style.css";
import API from "../../utils/API"

function SaveButton(props) {
  function saveBookfunc() {
    console.log(props.id)
    API.saveBook({...props.id}).then(data => console.log(data))
  }
  return (
    <span className="save-btn" onClick={saveBookfunc}{...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export default SaveButton;