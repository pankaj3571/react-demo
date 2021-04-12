import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
function Conatct() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setitems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://restcountries.eu/rest/v2/all');
        const items = await data.json();
        console.log(items)
        setitems(items)
        // items.map(ele=>{
        //     console.log(ele,"=========")
        // })
    }
    return (
        <div >
            {items.map((item, i) => (


                <h1 key={i}>
                  <Link to={`/contact/${i}`}>
                  {item.name}
                  </Link>  
                   </h1>
            ))}
        </div>
    );
}

export default Conatct;
