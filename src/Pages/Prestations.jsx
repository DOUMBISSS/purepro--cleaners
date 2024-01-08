import React from 'react';
import Footer from '../Pages/Footer';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

export default function Prestations  () {
            
    return (
    <div>
        <Navbar />
        <div className="container">
        <div className='section--business--content'>
          <h3 className='section--oportunity--title'>Nos offres de prestations </h3>
          {/* <div className='section--business--description'>
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
            </div> */}
              <div className='section__business__presentation'>
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

                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                 <img src="https://img.freepik.com/photos-premium/jardinier-tondre-herbe-faux-motorisee-dans-jardin_835648-119.jpg?w=900" alt="" />
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
                 <img src="https://img.freepik.com/photos-gratuite/male-adulte-masque-nettoyage-domicile_23-2148563563.jpg?w=900&t=st=1704670346~exp=1704670946~hmac=c8618096971dcb97a2dbc458a8e589be1ffc0aa1ed3a4877e1efc926592657a1" alt="" />
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
                 <img src="https://img.freepik.com/photos-gratuite/plein-coup-hommes-portant-equipement_23-2149345538.jpg?w=900&t=st=1704670469~exp=1704671069~hmac=453133eec6278ba2c93d001a6d23e18fc8b6f4e98397f81c43b8b55691612d3f" alt="" />
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
                  <img src="https://img.freepik.com/photos-premium/asiatique-travailleur-nettoyage-sable-lavage-exterieur-passerelle_30478-3047.jpg?w=900" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage spécifique </h3>
                 <ul>
                    <li>Nettoyage des travaux de rénovations/constructions</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>100 000 FCFA/prestations</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>

                  
                <div className='prestations__cards'>
                 <div className='business__cards__images'>
                  <img src="https://img.freepik.com/photos-premium/gros-plan-femme-menage-tenant-aspirateur-lavage-moderne-nettoyant-canape-sale-tache_130111-6401.jpg?w=900" alt="" />
                 </div>
                 <h3 className='business__cards__title'>Nettoyage Simples </h3>
                 <ul>
                    <li>Nettoyage des moquettes/tapis</li>
                    <li>Nettoyage des fauteils</li>
                 </ul>
                 <p>A partir de <strong className='prestations__price'>10 000 FCFA/prestations</strong></p>
                 <button className='btn__contact'>Contactez-nous</button>
                </div>
              </div>

          </div>
        </div>
        <Footer/>
    </div>
    );
}
