import React from 'react';
import SaveButton from './SaveButton/index'

const BookCard = (props) => {
  
    return(
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p>Description: {props.description}</p>
                <SaveButton id={props} variant="primary">Save to Favorites</SaveButton>
                {/* <p>{props.published ==='0000' ? 'Not available' : props.published.substring(0, 4)}</p> */}

            </div>
        </div>
    )
}

export default BookCard;


{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}