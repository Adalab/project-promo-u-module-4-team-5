import '../../styles/layouts/Header.scss';
import logoAdalab from '../../images/logo-adalabWhite.png';
import logoNuestro from '../../images/logo-nuestro.png';

function Header() {
  return (
    <>
      <div className="logos">
        <a href="/">
          <img
            className="ours"
            src={logoNuestro}
            alt="logoNuestro"
            title="Equipo Cohete"
          />
        </a>
        <img
          className="adalab"
          src={logoAdalab}
          alt="logoAdalab"
          title="Adalab"
        />
      </div>
      <header className="header">
        <h1 className="title">Proyectos Cohete</h1>
        <p className="desc">
          Escaparate en línea para recoger ideas a través de la tecnología.{' '}
        </p>
        <a className="btn" href="/">
          Ver proyectos
        </a>
      </header>
    </>
  );
}
export default Header;
