import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js';
import  data  from '../../data/data.js';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [item , setItem]= useState({});
    const { id } = useParams ();

    useEffect(() => {
        const getItems = new Promise ((res)=>{
            setTimeout(()=>{
                res(data)
            }, 2000)
        })
        getItems.then((res) => {
            setItem(res.find((i) => i.id === id));
          });
         }, [id])

    return (<ItemDetail {...item} />) ;
};

export default ItemDetailContainer
