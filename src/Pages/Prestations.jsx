import React from 'react';
// import Footer from '../Pages/Footer';
// import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function Prestations  () {
            
    return (
    <div>
        <Navbar />
        <div className="container">
        <div className='section--business--content'>
          <h3 className='section--oportunity--title'>Nos offres de prestations </h3>
          <div className='section--business--description'>
               <p className='desc'><strong> Tarifications :</strong>
               Les tarifs de nettoyage pour une société en Côte d'Ivoire varient en fonction de plusieurs facteurs, tels que la taille de la société, la nature de ses locaux, la fréquence des services de nettoyage, et les services spécifiques requis. Les entreprises de nettoyage établissent généralement leurs tarifs en tenant compte de ces critères.
                Pour obtenir un devis précis, il est recommandé de contacter plusieurs entreprises de nettoyage locales et de discuter de vos besoins spécifiques. Les entreprises peuvent effectuer une évaluation sur place pour déterminer la complexité de la tâche et établir un tarif en conséquence.
                En général, les tarifs de nettoyage pour une société en Côte d'Ivoire peuvent être calculés en fonction de plusieurs éléments :
                </p>
            
                <p className='desc'><strong>Taille des locaux : </strong> La superficie totale des bureaux, des espaces de travail, et des zones communes.</p>

                <p className='desc'> <strong>Type de nettoyage : </strong> Les services spécifiques requis, tels que le nettoyage des sols, le nettoyage des vitres, le nettoyage des sanitaires, etc.</p>

                <p className='desc'><strong>Fréquence des services : </strong> Si le nettoyage est effectué quotidiennement, hebdomadairement, mensuellement, ou à une autre fréquence.</p>

                <p className='desc'> <strong>Services supplémentaires : </strong> Des services spéciaux tels que le nettoyage après travaux, le nettoyage de moquettes, ou d'autres besoins particuliers.</p>

                <p className='desc'><strong>Durée du contrat : </strong> Certains contrats de nettoyage offrent des tarifs dégressifs en fonction de la durée d'engagement.
                    Il est important de discuter en détail avec les entreprises de nettoyage et de clarifier tous les aspects du contrat, y compris les produits de nettoyage utilisés, les heures d'intervention, et toute condition spécifique. Cela vous permettra d'obtenir un service adapté à vos besoins tout en respectant votre budget.
                    </p>
            </div>
              <div className='section__business__presentation'>
                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/vecteurs-libre/service-menage-menage_18591-52069.jpg?t=st=1703114901~exp=1703115501~hmac=8bc6e97bceabd4737db0cc4fabb36c385460e98e8a222ded8db57a8a0940ed30" alt="" />
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
                 <img src="https://img.freepik.com/vecteurs-libre/service-nettoyage-isometrique-ensemble-images-isolees-produits-nettoyants-detergents-aspirateurs-personnes-uniforme_1284-32172.jpg?w=740&t=st=1703115721~exp=1703116321~hmac=08656ff564b3f3902abfa5513b00a628ff7cb1e03642f39b8cfe6c98dab82743" alt="" />
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
                 <img src="https://img.freepik.com/vecteurs-libre/nettoyant-produits-entretien_18591-52060.jpg?t=st=1703114901~exp=1703115501~hmac=9f73b0b831d1aa27a14c63ce01e4b561b597d76e2baca404da9f6b49636244f7" alt="" />
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
                 <img src="https://img.freepik.com/vecteurs-libre/service-nettoyage-professionnel-concept-couleur-isometrique-quatre-nettoyeurs-nettoient-fenetres-essuient-poussiere-aspirent-sols-dans-illustration-appartement-du-client_1284-65943.jpg?w=826&t=st=1703115112~exp=1703115712~hmac=54d3f8bf1d7efe6080e2921b8e62b592d726b36f679594c4e4a7694cd7588ee9" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Bureau</h3>
                 <ul>
                    <li>Nettoyage bureaux/local archives</li>
                    <li>Nettoyage sols/meubles/vitres</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>150 000 FCFA/Mois</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/vecteurs-libre/sertie-quatre-compositions-isolees-nettoyeurs-gribouillent-personnages-humains-appareils-professionnels-detergents-chimiques-illustration-vectorielle_1284-68543.jpg?w=996&t=st=1703115067~exp=1703115667~hmac=9046d8868ce5fb0b0912628602c1460ed790bfbf692fa62bd3b7805a9a164200" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage espaces extérieures</h3>
                 <ul>
                    <li>Nettoyage régulier des espaces extérieures/parkings/terrasses</li>
                    <li>Elimination des débris extérieurs</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>100 000 FCFA/prestations</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/vecteurs-libre/nettoyeurs-produits-entretien_18591-52068.jpg?w=740&t=st=1703114901~exp=1703115501~hmac=1c43be80286995f99a52d9f7400680683e3ae05276996deee0f23879f5b1c140" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Facade</h3>
                 <ul>
                    <li>Nettoyage vitres</li>
                    <li>Nettoyage des murs intérieurs/extérieurs</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>250 000 FCFA/prestations</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/photos-premium/main-tenant-variation-objet_53876-75673.jpg?w=996" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage après évènement </h3>
                 <ul>
                    <li>Nettoyage après des réunions/conférences/évènements/receptions...</li>
                    <li>Gestion rapide des déchets générés lors d'évènements</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>100 000 FCFA/prestations</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                  <img src="https://img.freepik.com/vecteurs-libre/illustration-concept-service-nettoyage_114360-12701.jpg?w=900&t=st=1703115859~exp=1703116459~hmac=e066b01c3cb962c1ce38a7baafc341f238936eb5538523eddb5bcd373bf2650b" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage spécifique </h3>
                 <ul>
                    <li>Nettoyage des travaux de rénovations/constructions</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>100 000 FCFA/prestations</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

              </div>

          </div>
        </div>
        {/* <Footer/> */}
    </div>
    );
}
