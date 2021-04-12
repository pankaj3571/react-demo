import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
function ItemSDetail({match}) {
    const imageStyle={
        width:'100px',
        height:'100px'

    }
    useEffect(() => {
        fetchItems();
        console.log(match,"==========")
    }, [])
    const id =match.params.id;
    console.log(id)
    const [items, setitems] = useState({
        flag:{}
    });

    const fetchItems = async () => {
        const data = await fetch('https://restcountries.eu/rest/v2/all');
        const items = await data.json();
        console.log(items[id])
        setitems(items[id])
    }
    return (
        <div>
            <h1>{items.name}</h1>
            <img src={items.flag} style={imageStyle}/>
        </div>
    );
}

export default ItemSDetail;
