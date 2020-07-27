import React from 'react';
import './Book.css';

export default class Book extends React.Component {

  render() {
    return (
      <div className="volume">
        <div className="book-thumbnail">
          <img src="http://books.google.com/books/content?id=AcI6_aBD17sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" /> 
        </div>
        <div className="book-details">
          <h2>Java for Artists</h2>

          <p className="author">Author: Rick Miller</p>
          <p className="price">Price: $5.00</p>

          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis elit at orci efficitur, in sodales erat tempus. Curabitur id lectus ac quam tincidunt vehicula. Vivamus eget lacus quis mi ornare venenatis eu ac purus. Aenean rhoncus purus in nisi aliquam sodales. Nunc nec neque sed augue imperdiet posuere at a mi. Donec sit amet dolor et urna suscipit vulputate. Nunc risus erat, cursus id quam eu, bibendum commodo leo. Vestibulum quis augue tincidunt massa vestibulum dictum ac ut sapien. Nulla facilisi. Praesent convallis nibh vitae elit elementum luctus.</p>
        </div>
      </div>
    );
  }
}