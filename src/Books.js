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
        if(volumes.length === 0)
        {
            return (<div>Nothing to show yet</div>);
        }
        console.log(volumes);
        return (<div>{this.generateBooks(volumes)}</div>);
    }
}