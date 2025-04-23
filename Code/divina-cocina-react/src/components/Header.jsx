import React from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <header className="header-header-2 has-bottom-line">
      <div className="inner-header penci-header-second">
        <div className="container">
          <div id="logo">
            <a href="https://www.divinacocina.es/">
              <img
                className="penci-mainlogo penci-limg pclogo-cls"
                src="https://www.divinacocina.es/wp-content/uploads/2023/08/logo-divina-cocina-blanco.png"
                alt="Divina Cocina"
                width="186"
                height="52"
              />
            </a>
          </div>
          <div className="header-slogan">
            <p className="header-slogan-text">Recetas sencillas para alegrarte la vida</p>
          </div>
        </div>
      </div>

      <nav className="header-layout-bottom header-2 menu-style-1 menu-item-padding">
        <div className="container">
          <div className="button-menu-mobile header-2" onClick={toggleMobileMenu}>
            <i className="penci-faicon fa fa-bars"></i>
          </div>

          <div className="penci-mobile-hlogo">
            <a href="https://www.divinacocina.es/">
              <img
                className="penci-mainlogo penci-limg pclogo-cls"
                src="https://www.divinacocina.es/wp-content/uploads/2023/08/logo-divina-cocina-blanco.png"
                alt="Divina Cocina"
                width="186"
                height="52"
              />
            </a>
          </div>

          <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li className="menu-item">
              <a href="https://www.divinacocina.es">INICIO</a>
            </li>

            <li className={`menu-item menu-item-has-children ${openSubmenu === 1 ? 'open' : ''}`}>
              <button onClick={() => toggleSubmenu(1)} className="menu-toggle">
                CATEGORÍAS
              </button>
              <ul className="sub-menu">
                <li><a href="https://www.divinacocina.es/ensaladas-alinos/">Ensaladas y Aliños</a></li>
                <li><a href="https://www.divinacocina.es/entrantes-tapas/">Entrantes y Tapas</a></li>
                <li><a href="https://www.divinacocina.es/masas-panes/">Masas y Panes</a></li>
                <li><a href="https://www.divinacocina.es/arroces-2/">Arroces</a></li>
                <li><a href="https://www.divinacocina.es/pasta/">Pastas</a></li>
                <li><a href="https://www.divinacocina.es/huevos/">Huevos</a></li>
                <li><a href="https://www.divinacocina.es/sopas-cremas/">Sopas y Cremas</a></li>
                {/* Puedes seguir agregando más subcategorías o hacerlo dinámico */}
              </ul>
            </li>

            <li className="menu-item">
              <a href="https://www.divinacocina.es/recetas-en-freidora-de-aire/">FREIDORA DE AIRE</a>
            </li>

            <li className={`menu-item menu-item-has-children ${openSubmenu === 2 ? 'open' : ''}`}>
              <button onClick={() => toggleSubmenu(2)} className="menu-toggle">
                BLOG
              </button>
              <ul className="sub-menu">
                <li><a href="https://www.divinacocina.es/blog/cuaderno-de-cocina/">Cuaderno de Cocina</a></li>
                <li><a href="https://www.divinacocina.es/blog/ideas-y-menus/">Ideas y Menús</a></li>
                <li><a href="https://www.divinacocina.es/blog/trucos-y-tecnicas/">Trucos y Técnicas</a></li>
              </ul>
            </li>

            <li className="menu-item">
              <a href="https://www.divinacocina.es/videorecetas/">VÍDEO RECETAS</a>
            </li>
          </ul>

          {/* Buscador */}
          <div className="penci-top-search pcheader-icon top-search-classes">
            <form role="search" method="get" action="https://www.divinacocina.es/">
              <div className="pc-searchform-inner">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Teclea y pulsa enter..."
                  name="s"
                />
                <button type="submit" className="searchsubmit">Buscar</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;