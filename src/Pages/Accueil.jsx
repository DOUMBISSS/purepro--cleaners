import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Marquee from "react-fast-marquee";
import Footer from './Footer';

export default function Accueil () {
    const dispatch = useDispatch()
  const [display,setDisplay]= useState(false);
  

  const [cart,setCart]= useState(false);

  const closeCart = ()=> {
    setCart (false)
}
const showCart =()=>{
    setCart (true)
}
  // const newArrivages = useSelector(state=>state.categoryReducer.newArrivages);
  // const newsProducts = useSelector(state=>state.categoryReducer.newsProducts);
  // const carts = useSelector(state => state.cartReducer.carts);

    //   useEffect(()=>{
    //     localStorage.setItem("carts",JSON.stringify(carts));
    // })

    return (
      <div>
                <Marquee className="marquee" speed={80}>
                        -20% sur votre première commande avec le code promo DOUM2023
                 </Marquee>

               <Navbar/>
            <div className='main--part--container'>
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/photos-premium/couple-nettoyeurs-professionnels-restent-ensemble-dans-cuisine-contemporaine-detergents-maison_141188-7906.jpg?w=900" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/photos-premium/couple-heureux-nettoyeurs-professionnels-se-reposant-dans-canape-apres-avoir-nettoye-cuisine_141188-7869.jpg?w=900" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/photos-premium/nettoyeurs-multiculturels-heureux-regardant-camera-alors-qu-ils-se-tiennent-produits-nettoyage-au-bureau_132358-31834.jpg?w=1060" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                </div>
            </div>
            <div className='container'>
              <div className='container--presentation'>
                <div className='container--presentation--left'>
                    <h5 className='present--header'>Présentation de </h5>
                    <h3 className='present--title'>PurePro Cleaners</h3>
                    <p> <strong>PurePro Cleaners</strong> est une société de nettoyage 
                      professionnelle spécialisée dans la prestation de services de nettoyage de qualité pour les entreprises,
                       les institutions et les particuliers en Côte d'Ivoire. Forts de notre engagement envers l'excellence, 
                       nous offrons une gamme complète de services de nettoyage pour répondre aux besoins divers de nos clients. </p>

                       <p>Chez <strong>PurePro Cleaners</strong>, nous croyons en la responsabilité environnementale. Nous utilisons exclusivement des 
                        produits de nettoyage écologiques certifiés et nous mettons en œuvre des pratiques durables pour minimiser 
                        notre empreinte environnementale.</p>

                      <p>Notre équipe est composée de professionnels du nettoyage formés et expérimentés. Nous nous assurons que 
                        notre personnel respecte des normes élevées d'éthique professionnelle, de fiabilité et de discrétion.</p>

                        <Link to="/Qui--sommes-nous"><button className='btn__link__services'>Details <i className="fa-solid fa-arrow-right"></i> </button></Link>
                </div>
                <div className='container--presentation--right'>
                    <div className='container--presentation--right--box'>
                        <img src="https://img.freepik.com/photos-premium/couple-nettoyeurs-professionnels-restent-ensemble-dans-cuisine-contemporaine-detergents-maison_141188-7906.jpg?w=900" alt="" />
                    </div>
                </div>
              </div>

          </div>

          <div className='section--business'>
            <h2 className='business--header'>Quelques offres de nos prestations </h2>
              <div className='section__business__container'>
              <div className='prestations__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/photos-gratuite/femme-afro-tenant-seau-articles-nettoyage_58466-11246.jpg?w=900&t=st=1704670107~exp=1704670707~hmac=929e46f2fc639fafd1277c0cf95ef0996b4d7cc7ca033b680c48bba9c5de7ae4" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Grand ménage</h3>
                 <ul>
                    <li>Nettoyage fenetres/stores/murs</li>
                    <li>Nettoyage complet cuisine/chambres</li>
                    <li>Nettoyage meubles/locaux</li>
                    <li>Nettoyages des surfaces/dépoussierage</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>100 000 FCFA/prestations</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/photos-gratuite/sourire-tenant-pointe-vers-seau-outils-nettoyage-jeune-homme-nettoyeur-afro-americain-uniforme-gants-isoles-fond-vert_141793-135154.jpg?w=900&t=st=1704670847~exp=1704671447~hmac=3489c62a4bff1c7551d78dcd0d202b408ee367f2513effa69aef59bf3678edcd" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Standard</h3>
                 <ul>
                    <li>Nettoyage régulier de bureau,des aires communes et des sanitaires</li>
                    <li>Nettoyage cuisine/chambres/meubles</li>
                    <li>Nettoyage meubles/locaux</li>
                    <li>Nettoyages des surfaces/dépoussierage</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>120 000 FCFA/Mois</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/photos-premium/femme-afro-americaine-aux-cheveux-tresses-portant-tablier-tenant-produits-nettoyage-souriant-heureux-faisant-signe-ok-main-yeux-regardant-travers-doigts_839833-9871.jpg?w=900" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Résidentiel</h3>
                 <ul>
                    <li>Nettoyage régulier des surfaces/depoussierages/aspirations</li>
                    <li>Nettoyage cuisine/chambres/salle d'eau</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>100 000 FCFA/Mois</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/photos-gratuite/plein-coup-homme-poussant-bouton-ascenseur_23-2149345535.jpg?w=900&t=st=1704670183~exp=1704670783~hmac=6174f883faaaa4bb99f3a3661732507499a5b2197cba1fb1107f0dc8fdc562ef" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Bureau</h3>
                 <ul>
                    <li>Nettoyage bureaux/local archives</li>
                    <li>Nettoyage sols/meubles/vitres</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>150 000 FCFA/Mois</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

              </div>
              <div className='btn__section'>
               <Link to='/Nos__prestations'> <button className='btn__section__details'> Voir plus <i className="fa-solid fa-arrow-right"></i> </button></Link>
              </div>

          </div>
          <div className="question--part">
            <div className="question--part--content">
             <h3 className='question'>À la recherche d'un service de nettoyage, nous proposons différent services !!</h3>
            <div className="question--part--btn">
             <Link className='liste' to="/contactez--nous"> 
              <button className="btn--contact">Contactez-nous !</button>
             </Link>
            </div>
            </div>
        </div>

          {/* <div className='part__newsletter'>
            <div className='part__newsletter__content'>
              <h3 className='news__header'>Ne manquez pas nos excellentes offres & Recevez des offres de tous nos meilleurs par e-mail !</h3>
                <div className='news__container'>
                      <div className='news__container__content'>
                      <div className="news__container__input">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Sélectionnez votre ville</option>
                      <option value="1">Abidjan</option>
                    </select>
                    </div>
                    <div class="form-floating col-md-7">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label for="floatingInput">Addresse email</label>
                    </div>
                      <button className='btn__newsletter'>Abonnez-vous à la newsletter</button>
                      </div>
                </div>
            </div>
          </div>  */}
          <Footer/>
        </div>

    );
}

