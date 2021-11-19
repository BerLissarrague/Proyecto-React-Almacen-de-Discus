import React from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer ">
            <div className="redes">
                <p className='copy'> &copy;{new Date().getFullYear()} Almacen de Discus App - All Rigths Reserve </p>
                <a href="https://www.instagram.com"  rel='noopener'>< AiOutlineInstagram fontSize='40px' /> </a>
                <a href="https://www.facebook.com/Almac%C3%A9n-de-Discus-1593133190955225/" rel='noopener'><AiFillFacebook fontSize='40px' /></a>
                <a href="mailto:almacendediscus@gmail.com"><AiOutlineMail fontSize='40px' /></a>
            </div>
        </footer>
    )
}
export default Footer;