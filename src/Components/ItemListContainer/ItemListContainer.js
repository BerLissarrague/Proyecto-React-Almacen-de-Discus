import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";
import db from'../../lib/firebaseConfig';
import './ItemListContainer.css';
import { collection,query,getDocs, where, orderBy } from "@firebase/firestore";
import Cargando from '../Cargando/Cargando.js';

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando ] = useState (true)
    const { categoriaId } = useParams ();

    
  useEffect(() => {
    setCargando(true);

    const myItems = categoriaId
      ? query(collection(db, 'Productos'), where('categoria', '==', categoriaId))
      : query (collection(db, 'Productos'), orderBy('nombre'));

    
    getDocs(myItems)
      .then((res) => {
        const results = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setProductos(results);
      })
      .finally(() => setCargando(false));
  }, [categoriaId]);

    return (
        cargando ? (
            <Cargando/>
        ):(
        <ItemList productos={productos} />)
    );

};

export default ItemListContainer;