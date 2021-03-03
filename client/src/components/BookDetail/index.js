import React from "react";
import BookContext from "../../utils/bookContext";

function BookDetail() {
  return (
    // Use consumer to capture and destucture the state values
    <BookContext.Consumer>
      {({result: {Title, Author, Description, Image, Link}}) => (
        <div className="text-center">
          <img alt={Title} className="img-fluid" src={Image} style={{ margin: "0 auto" }} />
          <h3>Author(s): {Author}</h3>
          <h3>Description: {Description}</h3>
          <h3>Link: {Link}</h3>
        </div>
      )}
    </BookContext.Consumer>
  );
}

export default BookDetail;