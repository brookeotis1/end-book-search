import React from "react";



function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Book Search:</label>
        <input
           onChange={props.handleInputChange}
          value={props.search.title}
          name="title"
          type="text"
          className="form-control"
          placeholder="add title"
          id="title"
        />
        {/* <input
           onChange={props.handleInputChange}
          value={props.search.author}
          name="author"
          type="text"
          className="form-control"
          placeholder="add author"
          id="author"
        />
        <input
           onChange={props.handleInputChange}
          value={props.search.description}
          name="description"
          type="text"
          className="form-control"
          placeholder="add description"
          id="description"
        /> */}
        <br />
        <button 
         onClick={props.handleFormSubmit} className="btn btn-primary"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;