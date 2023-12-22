import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';


function Navbar ({search,setSearch}) {

    return (
      <div>
      <header>
          <div className='navbar'>
          <div className="navbar--left">
          {/* <div className='icon--menu'>
               <i className="fa-solid fa-bars"></i>
               </div> */}
            <div className="navbar--logo">
            {/* <Link to="/" className='header__title'><h5>SHOPPING<span>BAG</span></h5></Link> */}
              <Link to="/"> <img src={`${process.env.PUBLIC_URL}/log.jpg`} alt=""/></Link>
            </div>
          </div>
          <div className="navbar--center">
            <div className="navbar--center--content">
              <Link className='liste' to="/"><p>Accueil</p></Link>
              <Link className='liste' to="/Qui--sommes-nous" ><p>Qui sommes-nous ?</p></Link>
              <Link className='liste' to="/Notre--actualité"><p>Actualités</p></Link>
              <Link className='liste' to="/Nos__prestations"><p>Nos prestations</p></Link>
              <Link className='liste' to="/obtenir_devis"><p>Devis</p></Link>
              <Link className='liste' to="/contactez--nous"><p>Contactez-nous</p></Link>
            </div>
            <div className='logo--resp'>
              <div className="navbar--logo--resp">
              <Link to="/"> <img src={`${process.env.PUBLIC_URL}/delices.png`} alt=""/></Link>
              </div>
            </div>
          </div>
         </div>

        {/* <div className={display ? "menu show--menu" : "menu"}>
                    <div className='sidebar--menu'>
                        <div className='btn--close--sidebar' onClick={affi}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className='sidebar--header--logo'>
                            <div className='sidebar--header--logo--box'>
                                <img src="delices.png" alt="" />
                            </div>
                        </div>
                        <div className='menu__content'>
                          <div className='menu__content__liste'>
                            <Link className='list' to="/"><i className="fa-solid fa-bars"></i> Accueil</Link>
                          </div>
                          <div className='menu__content__liste'>
                          <Link className='list' to='/restaurant'><i className="fa-solid fa-utensils"></i> Restaurants</Link>
                          </div>
                          <div className='menu__content__liste'>
                          <Link className='list' to='/petit-dej'><i className="fa-solid fa-cookie-bite"></i> P'tit Dej & Snacks</Link>
                          </div>
                            <div className='menu__content__liste'>
                            <Link className='list' to='/supermarche'><i className="fa-solid fa-shop"></i> Supermarchés</Link>
                            </div>
                            <div className='menu__content__liste'>
                              <Link className='list' to='/burger--king'> <i className="fa-solid fa-burger"></i> Burger King</Link>
                            </div>
                            <div className='menu__content__liste'>
                            <Link className='list' to='/street--foods'><i className="fa-solid fa-burger"></i> Street Foods</Link>
                            </div>
                          <div className="col-12 col-md-12">
                            <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Cherchez un produit , une marque ou une categorie..." aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                          </form>
                          </div>
                        </div>
                        </div>

        </div> */}

    </header>
          

              </div>
    );
}

export default Navbar;
