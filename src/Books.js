import React from 'react';
import Book from './Book';


export default class Books extends React.Component
{
    generateBooks(volumes)
    {
        return volumes.map((book, index)=>{
            return <Book key={index} book={book} />
        })
    }
    render()
    {
        const {volumes = []} = this.props;
        console.log(this.generateBooks(volumes));
        return (<div>{this.generateBooks(volumes)}</div>);
    }
}