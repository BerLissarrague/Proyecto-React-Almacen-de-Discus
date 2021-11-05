import React from "react";
import Item from './Item/Item.js';

export const ItemList = ({ productos }) => {
    return (
      <section>
        { productos?.map((producto) => (
          <Item {...producto} key={producto.id} />
        ))}
      </section>
    );
  };

export default ItemList;