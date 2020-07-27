import React from 'react';
import './Book.css';

export default class Book extends React.Component {
  
  checkPrice()
  {
    const {book} = this.props;
    if(book.saleInfo.listPrice)
    {
      
      return `$${book.saleInfo.listPrice.amount}`;
      
    }
    else{
      return "FREEEEEE!!";
    }
  }
  render() {
    const {book} = this.props;
    const {authors = []} = book.volumeInfo
    
    return (
      <div className="volume">
        <div className="book-thumbnail">
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="A visual pushgit."/> 
        </div>
        <div className="book-details">
          <h2>{book.volumeInfo.title}</h2>

          <p className="author">Authors: {authors.join(', ')} </p>
          <p className="price"> Price: {this.checkPrice()}</p>

          <p className="description">
            {book.volumeInfo.description}
          </p>
        </div>
      </div>
    );
  }
}