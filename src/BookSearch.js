import React from 'react';
import './BookSearch.css';

export default class BookSearch extends React.Component
{
    render()
    {
        return (<div classNameName="BookSearchApp">
                    <header>
                    <h1>Sacred Pipe Search</h1>
                    <p>We are pipe.</p>
            
                    <form id="booksearch">
                        <div className="search-container">
                            <label className="search-label" for="search-input">Search:</label>
                            <input type="search" name="search-input" id="search-input" placeholder="Book titles or artists:" />
                            <button className="submit-btn">Submit</button>
                        </div>
                        <div className="filters-container">
                            <label for="printType-selector">Print Type:</label>
                            <select className="selector" id="printType-selector" name="printType-selector">
                                <option value="0" selected>All</option>
                                <option value="1" >Book</option>
                                <option value="2" >Mag</option>
                            </select>
                            <label for="bookType-selector">Print Type:</label>
                            <select className="selector" id="bookType-selector" name="bookType-selector">
                                <option value="0" selected>No Filter</option>
                                <option value="1" >Free</option>
                                <option value="2" >Paid</option>
                                <option value="3" >Partial</option>
                                <option value="4" >Full</option>
                            </select>
                        </div>
                    </form>
            
                </header>
                <main>
                    
                </main>
            </div>);
    }
}