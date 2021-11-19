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
                            src='image/a7.png'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='image/a1.png'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 " src='image/a6.png'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src='image/a3.png'
                        />
                    </Carousel.Item>
                </Carousel>

            </main>
        </>)
};
export default Main;