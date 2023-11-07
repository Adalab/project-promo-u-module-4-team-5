import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/callToApi';
import logoNuestro from '../../images/logo-nuestro.png';
import Preview from './Preview';
import Loading from '../Project/Loading';
import '../../styles/layouts/Landing.scss';

const Landing = () => {
  const [listProject, setListProject] = useState([]);
  const [landingIsLoading, setlLandingIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setlLandingIsLoading(true);
      const data = await api();
      setListProject(data.projects);
      setlLandingIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="landing">
      <Link to="/create-projects" className="btn">
        Crear Proyecto Cohete{' '}
        <img src={logoNuestro} alt="cohete" className="logo"></img>{' '}
      </Link>

      {landingIsLoading ? (
        <Loading loading={landingIsLoading} />
      ) : (
        <section className="articlesContainer">
          {listProject.map((project) => {
            return <Preview key={project.idProject} data={project} />;
          })}
        </section>
      )}
    </div>
  );
};
export default Landing;
