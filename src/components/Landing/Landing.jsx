import { Link } from 'react-router-dom';
import logoNuestro from '../../images/logo-nuestro.png';

const Landing = () => {
  return (
    <div className="landing">
      <Link to="/create-projects" className="btn">
        Crear Proyectos Cohete{' '}
        <img src={logoNuestro} alt="cohete" className="logo"></img>{' '}
      </Link>
    </div>
  );
};
export default Landing;
