import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import getDb from '../../lib/FirebaseConfig';
import { collection, query, getDocs, where } from '@firebase/firestore';
import Cargando from '../cargando/Cargando';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true)
  const { categoriaId } = useParams();

  useEffect(() => {
    setCargando(true);

    const myItems = categoriaId
      ? query(collection(getDb, 'Productos'), where('categoria', '==', categoriaId),)
      : collection(getDb, 'Productos');


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
      <Cargando />
    ) : (
      <ItemList  productos={productos} />)
  );

};

export default ItemListContainer;