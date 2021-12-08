import React from "react";
import { Carousel } from 'react-bootstrap';
import './Main.css';

const Main = () => {
    return (
        <>
            <main>
                <Carousel className='carousel' >
                    <Carousel.Item className='carousel-item'>
                        <img
                            className="d-block w-100"
                            src='https://firebasestorage.googleapis.com/v0/b/e-commerce-almacen-de-discus.appspot.com/o/a6.png?alt=media&token=49e79490-8464-49db-852e-294736ee0d26'
                            alt='imagenCarrousel'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://firebasestorage.googleapis.com/v0/b/e-commerce-almacen-de-discus.appspot.com/o/a1.png?alt=media&token=10a5af03-7350-401b-ba79-cbafd8570715'
                            alt='imagenCarrousel'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 " src='https://firebasestorage.googleapis.com/v0/b/e-commerce-almacen-de-discus.appspot.com/o/a3.png?alt=media&token=c5dc5106-b6c9-43fd-9001-2d2fd53cb1cb' alt='imagenCarrousel' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src='https://firebasestorage.googleapis.com/v0/b/e-commerce-almacen-de-discus.appspot.com/o/a2.png?alt=media&token=e6f3ba68-52bc-4459-9961-7e3e5b40c758'
                            alt='imagenCarrousel'
                        />
                    </Carousel.Item>
                </Carousel>

            </main>
        </>)
};
export default Main;