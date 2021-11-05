import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.js";
import data from './../../data/data.js'
import './ItemListContainer.css'

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando ] = useState (true)
    const { categoriaId } = useParams ();

    useEffect(() => {
        setCargando(true);
        const listaDeProductos = new Promise((res) => {
            setTimeout(() => {
                res(data)
            }, 2000)
        });
        listaDeProductos.then((data) => {
            setCargando(false)           
            categoriaId ? setProductos(data.filter ( (i) => i.categoria === categoriaId)) : setProductos(data);
        });
    }, [categoriaId]);

    return (
        cargando ? (
            <h3>Cargando productos</h3>
        ):(
        <ItemList productos={productos} />)
    );

};

export default ItemListContainer;