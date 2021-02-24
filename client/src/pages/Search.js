import React, {useState} from "react";
import {Row, Container, Col} from "../components/Grid";

import SearchForm from "../components/SearchForm";
import SaveBtn from "../components/SaveBtn"
import BookList from "../components/BookList"
import axios from "axios";
//import API from "../utils/API";


//search/home
//header
//nav - go to saved/favorites list
//search input
//search button
//api here?
//render list
//view button?
//save button - save list



const Search = () => {
  const [search, setSearch] = useState({title:"", author:"", description:""})

   

  const handleInputChange = (event) => {
setSearch({...search, [event.target.name]:event.target.value})
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    

axios.post("api/books", search).then(res => {
  console.log(res)
})
  }
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          
        </Col>
        <Col size="md-6 sm-12">
          <SearchForm handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} search={search} />
          <BookList />
          <SaveBtn />
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
