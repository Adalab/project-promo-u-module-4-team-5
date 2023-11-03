import { Link } from "react-router-dom";
import logoNuestro from "../../images/logo-nuestro.png";
import api from "../../services/CalltoApi"; /* llamamos api a la funcion getData Project de CallToApi*/
import Preview from "./Preview";
import { useState, useEffect } from "react";
import '../../styles/layouts/Landing.scss';

const Landing = () => {
  const [listProject, setListProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api();
      console.log(data);
      setListProject(data.projects);
    };
    fetchData();
  }, []);

  return (
    <div className="landing">
      <Link to="/create-projects" className="btn">
        Crear Proyectos Cohete{" "}
        <img src={logoNuestro} alt="cohete" className="logo"></img>{" "}
      </Link>

      <section className="articlesContainer">
          { listProject.map((project) => {
            console.log(project);
            return <Preview key={project.id} data={project} />;
            }
          )}           
      </section>

    </div>
  );
};
export default Landing;

