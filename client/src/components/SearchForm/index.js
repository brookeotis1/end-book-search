
import React from "react";
import BookContext from "../../utils/bookContext";

function SearchForm() {
  return (
    // Use consumer to capture state.search and form handler functions
    <BookContext.Consumer>
      {({search, handleInputChange, handleFormSubmit}) => (
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={handleInputChange}
              value={search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For a Book"
              id="search"
            />
            <br />
            <button onClick={handleFormSubmit} className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      )}
    </BookContext.Consumer>
  );
}

export default SearchForm;



//import React from "react";

// function BookSearch({ handleInputChange, q, handleFormSubmit }) {
//     return (
//         <div className="container">
//             <div>
//                 <h3>Book Search</h3>
//             </div>
//             <form>
//                 <div className="form-group">
//                     <label htmlFor="searchInput">Books</label>
//                     <input type="text" className="form-control" id="searchInput" value={q} name='q' onChange={handleInputChange}/>
//                 </div>
//                 <button type="submit" className='btn btn-success' onClick={handleFormSubmit}>Search</button>
//             </form>
//         </div>
//     )
// }

// export default BookSearch;