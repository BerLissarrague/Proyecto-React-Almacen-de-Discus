
import React from "react";
import { Carousel } from 'react-bootstrap';
import a3 from './../../assets/a3.png';
import a7 from './../../assets/a7.png';
import a1 from './../../assets/a1.png';

import a6 from './../../assets/a6.png';
import './Main.css'

const Main = () => {
    return (
        <>
            <main>
                <Carousel className='carousel' >
                    <Carousel.Item className='carousel-item'>
                        <img
                            className="d-block w-100"
                            src={a7}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={a1}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={a6}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={a3}
                        />
                    </Carousel.Item>
                </Carousel>

            </main>
        </>)
};
export default Main;