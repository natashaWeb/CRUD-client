import React from "react";
import {
    IoLogoInstagram,
    IoLogoFacebook,
    IoLogoTwitter,
} from "react-icons/io5";

export const Footer = () => {
    return (
        <footer className="footer_container">
            <ul>
                <li>12 1234-1234</li>
                <li>email@gmail.com</li>
                <li>Avenida 12</li>
            </ul>
            <ul>
                <li>
                    <IoLogoInstagram />
                </li>
                <li>
                    <IoLogoFacebook />
                </li>
                <li>
                    <IoLogoTwitter />
                </li>
            </ul>
            <ul>
                <li>Métodos de envío</li>
                <li>Políticas de devolución</li>
                <li>Términos y condiciones</li>
            </ul>
        </footer>
    );
};
