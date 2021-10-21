import React from "react";
import Item from './Item/Item.js';


const ItemList =({productos})=>{
    return( <>
            {productos.map((producto)=> 
                <Item key={producto.id} nombre={producto.nombre} description={producto.description} precio={producto.precio} imagen={producto.imagen}/>
            )}
    </>
    )
}

export default ItemList;