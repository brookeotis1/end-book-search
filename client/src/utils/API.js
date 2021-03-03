import axios from "axios";


export default {


  getBooks: function() {
    return axios.get("/api/books");
  },
  
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};






//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   },

// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&apikey=AIzaSyBevsjvWWUvcvHL1KtFYtXrkOCrkgRXz3s";