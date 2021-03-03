
import React, { Component } from "react";
import Container from "../Container/index.js";
import Row from "../Row/index.js";
import Col from "../Col/index.js";
import Card from "../Card/index.js";
import SearchForm from "../SearchForm/index.js";
import BookDetail from "../BookDetail/index.js";
import API from "../../utils/API";
import BookContext from "../../utils/bookContext";
import Jumbotron from "../Jumbotron/index.js";
import Nav from "../Nav/index.js";

class BookContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      // Pass state and the two form handler functions into the provider
      <BookContext.Provider 
        value={{
          ...this.state, 
          handleInputChange: this.handleInputChange, 
          handleFormSubmit: this.handleFormSubmit
        }}
      >
        <Jumbotron>
              <h1>Books Search</h1>
            </Jumbotron>
        <Nav />
        <Container>
          <Row>
            <Col size="md-8">
              <Card
                heading={this.state.result.Title || "Search for a Book to Begin"}
              >
                {this.state.result.Title ? <BookDetail /> : <h3>No Results to Display</h3>}
              </Card>
            </Col>
            <Col size="md-4">
              <Card heading="Search">
                <SearchForm />
              </Card>
            </Col>
          </Row>
        </Container>
      </BookContext.Provider>
    );
  }
}

export default BookContainer;

