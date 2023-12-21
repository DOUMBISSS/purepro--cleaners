import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'animate.css';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Marquee from "react-fast-marquee";

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

            </div>
            <div className='container'>
              <div className='container--presentation'>
                <div className='container--presentation--left'>
                    <h5 className='present--header'>Présentation de </h5>
                    <h3 className='present--title'>PurePro Cleaners</h3>
                    <p> <strong>PurePro Cleaners</strong> Services est une société de nettoyage 
                      professionnelle spécialisée dans la prestation de services de nettoyage de qualité pour les entreprises,
                       les institutions et les particuliers en Côte d'Ivoire. Forts de notre engagement envers l'excellence, 
                       nous offrons une gamme complète de services de nettoyage pour répondre aux besoins divers de nos clients. </p>

                       <p>Chez <strong>PurePro Cleaners</strong>, nous croyons en la responsabilité environnementale. Nous utilisons exclusivement des 
                        produits de nettoyage écologiques certifiés et nous mettons en œuvre des pratiques durables pour minimiser 
                        notre empreinte environnementale.</p>

                      <p>Notre équipe est composée de professionnels du nettoyage formés et expérimentés. Nous nous assurons que 
                        notre personnel respecte des normes élevées d'éthique professionnelle, de fiabilité et de discrétion.</p>

                        <Link><button className='btn__link__services'>Nos services <i class="fa-solid fa-arrow-right"></i> </button></Link>
                </div>
                <div className='container--presentation--right'>
                    <div className='container--presentation--right--box'>
                        <img src="https://img.freepik.com/photos-premium/couple-heureux-nettoyeurs-professionnels-se-reposant-dans-canape-apres-avoir-nettoye-cuisine_141188-7869.jpg?w=900" alt="" />
                    </div>
                </div>
              </div>

          </div>

          <div className='section--business'>
            {/* <div className='section--business--header'>
              <img src="https://res.cloudinary.com/glovoapp/image/fetch/f_svg,c_lpad,q_auto:low,h_80,w_117,b_transparent/https://glovoapp.com/images/corporate-container/together.svg" alt="" />
            </div>
          <h3 className='section--oportunity--title'>Opportunités</h3> */}
              <div className='section__business__container'>
                <div className='business__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/vecteurs-libre/service-menage-menage_18591-52069.jpg?t=st=1703114901~exp=1703115501~hmac=8bc6e97bceabd4737db0cc4fabb36c385460e98e8a222ded8db57a8a0940ed30" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Grand ménage</h3>
                 <p>C'est vous le chef ! Livrez avec <strong>Délices House</strong> pour gagner des revenus compétitifs en toute flexibilité et liberté.</p>
                 <button className='btn__join'>Rejoignez-nous</button>
                </div>

                <div className='business__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/vecteurs-libre/service-nettoyage-professionnel-concept-couleur-isometrique-quatre-nettoyeurs-nettoient-fenetres-essuient-poussiere-aspirent-sols-dans-illustration-appartement-du-client_1284-65943.jpg?w=826&t=st=1703115112~exp=1703115712~hmac=54d3f8bf1d7efe6080e2921b8e62b592d726b36f679594c4e4a7694cd7588ee9" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Bureau</h3>
                 <p>C'est vous le chef ! Livrez avec <strong>Délices House</strong> pour gagner des revenus compétitifs en toute flexibilité et liberté.</p>
                 <button className='btn__join'>Rejoignez-nous</button>
                </div>

                <div className='business__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/vecteurs-libre/nettoyant-produits-entretien_18591-52060.jpg?t=st=1703114901~exp=1703115501~hmac=9f73b0b831d1aa27a14c63ce01e4b561b597d76e2baca404da9f6b49636244f7" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Résidentiel</h3>
                 <p>C'est vous le chef ! Livrez avec <strong>Délices House</strong> pour gagner des revenus compétitifs en toute flexibilité et liberté.</p>
                 <button className='btn__join'>Rejoignez-nous</button>
                </div>

                <div className='business__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/vecteurs-libre/service-nettoyage-isometrique-ensemble-images-isolees-produits-nettoyants-detergents-aspirateurs-personnes-uniforme_1284-32172.jpg?w=740&t=st=1703115721~exp=1703116321~hmac=08656ff564b3f3902abfa5513b00a628ff7cb1e03642f39b8cfe6c98dab82743" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Standard</h3>
                 <p>C'est vous le chef ! Livrez avec <strong>Délices House</strong> pour gagner des revenus compétitifs en toute flexibilité et liberté.</p>
                 <button className='btn__join'>Rejoignez-nous</button>
                </div>

                <div className='business__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/vecteurs-libre/sertie-quatre-compositions-isolees-nettoyeurs-gribouillent-personnages-humains-appareils-professionnels-detergents-chimiques-illustration-vectorielle_1284-68543.jpg?w=996&t=st=1703115067~exp=1703115667~hmac=9046d8868ce5fb0b0912628602c1460ed790bfbf692fa62bd3b7805a9a164200" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage espaces extérieures</h3>
                 <p>C'est vous le chef ! Livrez avec <strong>Délices House</strong> pour gagner des revenus compétitifs en toute flexibilité et liberté.</p>
                 <button className='btn__join'>Rejoignez-nous</button>
                </div>

                <div className='business__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/vecteurs-libre/nettoyeurs-produits-entretien_18591-52068.jpg?w=740&t=st=1703114901~exp=1703115501~hmac=1c43be80286995f99a52d9f7400680683e3ae05276996deee0f23879f5b1c140" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Facade</h3>
                 <p>C'est vous le chef ! Livrez avec <strong>Délices House</strong> pour gagner des revenus compétitifs en toute flexibilité et liberté.</p>
                 <button className='btn__join'>Rejoignez-nous</button>
                </div>

                <div className='business__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/photos-premium/main-tenant-variation-objet_53876-75673.jpg?w=996" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage après évènement </h3>
                 <p>C'est vous le chef ! Livrez avec <strong>Délices House</strong> pour gagner des revenus compétitifs en toute flexibilité et liberté.</p>
                 <button className='btn__join'>Rejoignez-nous</button>
                </div>

                <div className='business__cards'>
                 <div className='business__cards__images'>
                  <img src="https://img.freepik.com/vecteurs-libre/illustration-concept-service-nettoyage_114360-12701.jpg?w=900&t=st=1703115859~exp=1703116459~hmac=e066b01c3cb962c1ce38a7baafc341f238936eb5538523eddb5bcd373bf2650b" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage spécifique </h3>
                 <p>C'est vous le chef ! Livrez avec <strong>Délices House</strong> pour gagner des revenus compétitifs en toute flexibilité et liberté.</p>
                 <button className='btn__join'>Rejoignez-nous</button>
                </div>

              </div>

          </div>
          <div className='part__newsletter'>
            <div className='part__newsletter__content'>
              <h2 className='news__header'>-20% sur votre première commande en vous abonnant à nos newsletters !</h2>
              <p>Ne manquez pas nos excellentes offres & Recevez des offres de tous nos meilleurs vendeurs par e-mail</p>
                <div className='news__container'>
                      <div className='news__container__content'>
                      <div className="'news__container__input">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Sélectionnez votre ville</option>
                      <option value="1">Abidjan</option>
                    </select>
                    </div>
                    <div class="form-floating col-md-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label for="floatingInput">Addresse email</label>
                    </div>
                      <button className='btn__newsletter'>Abonnez-vous à la newsletter</button>
                      </div>
                </div>
            </div>

          </div> 
        </div>

    );
}

