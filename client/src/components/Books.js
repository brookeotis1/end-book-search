import React, { Component } from 'react';
import SearchArea from './SearchArea';
import axios from 'axios';
import BookList from './BookList';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
            
        }
    }

        searchBook = (e) => {
        e.preventDefault()
        const url = "https://www.googleapis.com/books/v1/volumes?q="
        axios.get(url + this.state.searchField)
          .then(data => {
              console.log(data)
          const cleanData= this.cleanData(data)
             this.setState({ books: cleanData})
          })
      };


    handleSearch =(e) => {
        console.log(e.target.value)
        this.setState({ searchField: e.target.value })
    }

    cleanData = (data) => {
        const cleanedData = data.data?.items.map((books) => {
            if(books.volumeInfo.hasOwnProperty('publishedDate') === false) {
                books.volumeInfo['publishedDate'] = '0000';
            }
            else if(books.volumeInfo.hasOwnProperty('imageLinks') === false) {
                books.volumeInfo['imageLinks'] = { thumbnail: 'https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/lates?cb=20141028171337' }
            }

            return books;
        })
            console.log(cleanedData)
        return cleanedData;
    }

    render() {
        return (
            <div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books}/>
            </div>
        )
    }
}

export default Books;