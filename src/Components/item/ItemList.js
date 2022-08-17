import React from "react";
import Item from './Item';

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