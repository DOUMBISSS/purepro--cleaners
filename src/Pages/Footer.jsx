import React from 'react';
// import Footer from '../Pages/Footer';
// import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function Footer  () {
            
    return (
      <div className='footer'>
          <div className='right'>
            <p>Copyright © 2022,PurePro Cleaners </p>
            </div>
          <div className="foot--content">
              <div className='schedule'>
                <h4 className='footer__title'>Horaire d'ouverture</h4>
                  <p>Lundi-Vendredi : 8h-16h</p>
                  <p>Samedi : 9h-12h</p>
              </div>
              
              <div className='address'>
                <h4 className='footer__title'>Contactez-nous</h4>
                <p><i className="fa-solid fa-location-dot"></i> Cocody Angré 7eme Tranche</p>
                <p><i className="fa-solid fa-phone"></i> +225 07 77 88 00 82</p>
                <p><i className="fa-solid fa-envelope"></i> PurePro@Cleaners.ci</p>
                <p><i className="fa-solid fa-globe"></i> www.PurePro-Cleaners.ci</p>
              </div>

              <div className='social--media'>
                <h4 className='footer__title'>Réseaux sociaux</h4>
                  <p><i className="fa-brands fa-facebook"></i>Facebook</p>
                  <p><i className="fa-brands fa-instagram"></i>Instagram</p>
                  <p><i className="fa-brands fa-whatsapp"></i>WhatsApp</p>
                  <p><i class="fa-brands fa-tiktok"></i> Tiktok</p>
              </div>
          </div>

           <div className='name--developer'>
            <p>Developed by Doumbia Fode (+225 0777880082)</p>
           </div>
      </div>
    );
}
