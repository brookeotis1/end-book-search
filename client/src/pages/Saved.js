import React, { useEffect, useState } from "react";
import { ListItem, List } from "../components/List";
import DeleteButton from "../components/DeleteButton";
import { Link } from "react-router-dom";
//import { useStoreContext } from "../utils/GlobalState";
//import { REMOVE_FAVORITE, ADD_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";
//import BookList from "../components/";
import API from "../utils/API"





const Saved = () => {
  // const [state, dispatch] = useStoreContext();
  const [state, setState] = useState([]);

//   const getFavorites = () => {
//     dispatch({ type: LOADING });
//     dispatch({ type: UPDATE_FAVORITES });
//   };

// const addFavorite = () => {
//   dispatch({
//     type: ADD_FAVORITE,
//     post: state.currentBook
//   });
// };

//   const removeFromFavorites = id => {
//     dispatch({
//       type: REMOVE_FAVORITE,
//       _id: id
//     });
//   };
const grabFavorites = () => {
  API.getBooks().then(data => {
    console.log(data)
    setState(data)
})
}
const removeFromFavorites = (id) => {
  API.deleteBook(id).then(data => {
  console.log(data)
  // const newState = state.data.filter(book => book._id !== id)
  // setState(newState)
  })
}
  useEffect(() => {
    grabFavorites();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorite Books</h1>
      {state.data?.length ? (
        <>
        {/* <BookList /> */}
        <List> 
          <h3 className="mb-5 mt-5">Click on a book</h3>
          {state.data?.map(book => (
            <ListItem key={book._id}>
              <Link to={"/books/" + book._id}>
                <strong>
                  {book.title} by {book.author}
                </strong>
              </Link>
              <DeleteButton onClick={() => removeFromFavorites(book._id)} />
            </ListItem>
          ))}
        </List>
        </>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="search">Back to search</Link>
      </div>
    </div>
  );
};

export default Saved;
