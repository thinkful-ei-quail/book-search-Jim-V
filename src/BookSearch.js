import React from 'react';
import Books from './Books';
import './BookSearch.css';

export default class BookSearch extends React.Component
{

    state = {
        volumes: [],
        urlData:{search:"Latest crap",apiKey:"AIzaSyCqu7vP5nWWE7dYWyVxGKEHDsC9hTJuWwo",filter:"ebooks", printType:"all"}

    }
    searchApi(url)
    {
        fetch(url)
            .then(resp => resp.json()).then(jsonResp => {
                this.setState({volumes: jsonResp.items});
                
            }).catch(e =>{
                throw Error("Problem with the fetch chain.");
            })
    }
    getUrl()
    {
        const {urlData} = this.state;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${urlData.search}&key=${urlData.apiKey}&filter=${urlData.filter}&printType=${urlData.printType}`;
        console.log(url);
        return url;
        
    }

    render()
    {
        const {volumes, urlData} = this.state;
        return (<div className="BookSearchApp">
                    <header>
                    <h1>Book Search</h1>
                    <p>Got books? Why yes, we have books.</p>
            
                    <form id="booksearch" onSubmit={(e) => {
                        e.preventDefault();
                        this.searchApi(this.getUrl());
                    }}>
                        <div className="search-container">
                            <label className="search-label" htmlFor="search-input">Search:</label>
                            <input type="search" onInput={(e) => {
                                
                                urlData.search = e.currentTarget.value;
                                console.log(this.state.urlData.search);

                            }} name="search-input" id="search-input" placeholder="Book titles or artists:" />
                            <button className="submit-btn">Submit</button>
                        </div>
                        <div className="filters-container">
                            <label htmlFor="printType-selector">Print Type:</label>
                            <select className="selector" id="printType-selector" name="printType-selector" defaultValue='all' onInput={(e)=>{
                                
                                urlData.printType = e.currentTarget.value;
                                console.log(this.state.urlData.printType);

                            }}>
                                <option value="all" >All</option>
                                <option value="books" >Books</option>
                                <option value="magazines" >Magazines</option>
                            </select>
                            <label htmlFor="bookType-selector">Book Type:</label>
                            <select className="selector" id="bookType-selector" name="bookType-selector" defaultValue='ebooks'onInput={(e)=>{
                                
                                urlData.filter = e.currentTarget.value;
                                console.log(this.state.urlData.filter);

                            }}>
                                <option value="ebooks" >No Filter</option>
                                <option value="free-ebooks" >Free</option>
                                <option value="paid-ebooks" >Paid</option>
                                <option value="partial" >Partial</option>
                                <option value="full" >Full</option>
                            </select>
                        </div>
                    </form>
            
                </header>
                <main>
                    <Books volumes={volumes}/>
                </main>
            </div>);
    }
}