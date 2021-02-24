import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";
import BookList from "../components/BookList";

//Saved
//nav - go back to search/home
//list of saved/favorites
//delete button? 



const Saved = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

// const addFavorite = () => {
//   dispatch({
//     type: ADD_FAVORITE,
//     post: state.currentBook
//   });
// };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorite Books</h1>
      {state.favorites.length ? (
        <>
        <BookList />
        <List> 
          <h3 className="mb-5 mt-5">Click on a book</h3>
          {state.favorites.map(book => (
            <ListItem key={book._id}>
              <Link to={"/books/" + book._id}>
                <strong>
                  {book.title} by {book.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(book._id)} />
            </ListItem>
          ))}
        </List>
        </>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="saved">Back to saved</Link>
      </div>
    </div>
  );
};

export default Saved;
