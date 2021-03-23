import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
              <div class="container">
            <div class="about-us" data-aos="fade-right" data-aos-delay="200">
                <h2>O nas</h2>
                <p>
                Jesteśmy wspólnotą młodych ludzi, która poznała się w bardzo nowoczesny sposób - odnaleźliśmy się w katolickiej grupie na Facebooku, bo szukaliśmy miejsca, gdzie moglibyśmy rozmawiać o naszych wątpliwościach i problemach. Z tego zrodził się pomysł na bloga, którego teraz czytasz.
                </p>
            </div>
            <div class="newsletter" data-aos="fade-right" data-aos-delay="200">
                <h2>Kontakt</h2>
                <div class="form-element">
                    <a href="mailto:zarzucamysieci@gmail.com">
                    <button class="contact-btn">Napisz do nas!</button>
                    </a>
                </div>
            </div>
            <div class="instagram" data-aos="fade-left" data-aos-delay="200">
                <h2>Instagram</h2>
                <div class="flex-row">
                  <a href="https://www.instagram.com/p/CMHjlaZDk7S/">
                  <img src="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/157944210_858051671408342_9207361180764222181_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=O3zlWvIxoOsAX-_n3uZ&oh=e82af10ced062d36aa371ee517de9014&oe=607038C6"
                  alt="insta1"/>
                  </a>
                    <a id = "insta2" href="https://www.instagram.com/p/CMDIvT3jrN-/">
                    <img src="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/157612323_433376044634203_796557293405093924_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=Pd5ntgt6x0AAX9FeL86&oh=8fec3d5329996703c62a5272aeff8e2c&oe=606DC29B"
                    alt="insta2"/>
                    </a>
                    <a href="https://www.instagram.com/p/CL7P8nqjOdq/">
                    <img src="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/155471225_3606052112847705_4872008657666448113_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Ys-qMDasLhYAX9NvmOC&oh=5e7e32b84d3e8b07093d75ab0dbe8095&oe=607036EF"
                     alt="insta3"/>
                     </a>
                </div>
            </div>
        </div>
        <div class="rights">
            <h4 class="text-gray">
                Zarzucamy Sieci 2021
            </h4>
        </div>
        </div>
    )
}

export default Footer;
