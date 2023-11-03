import PropTypes from 'prop-types';

import '../../styles/layouts/CardPreview.scss';
import defaultAvatar from '../../images/Avatar1.jpg';
import defaultBackground from '../../images/Project5.jpg';
// import cover from '../../images/cover.jpeg';
// import user from '../../images/user.jpeg';

function CardPreview({ data, avatarAutor, avatarProject }) {
  return (
    <section className="preview">
      <img
        className="image"
        src={avatarProject ? avatarProject : defaultBackground}
        alt=""
      />

      <section className="autor">
        <section className="info-project">
          <p className="subtitle">Personal Project Card</p>
          <hr className="line" />

          <h2 className="title">{data.name || 'Elegant Workspace'}</h2>
          <p className="slogan">{data.slogan || 'Diseños Exclusivos'}</p>
          <p className="desc">
            {data.desc ||
              `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum`}
          </p>
          <div className="techDemoRepo">
            <section className="technologies">
              <p className="text">{data.technologies || 'React JS, MongoDB'}</p>
            </section>
            <section className="demo repo">
              <a href={data.demo || ''} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-globe"></i>
              </a>
              <a href={data.repo || ''} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </section>
          </div>
        </section>

        <section className="info-autor">
          <img
            className="image"
            src={avatarAutor ? avatarAutor : defaultAvatar}
            alt=""
          />
          <p className="job">{data.job || 'Full Stack Developer'}</p>
          <p className="name">{data.autor || 'Úrsula Micaela Morata'} </p>
        </section>
      </section>
    </section>
  );
}
CardPreview.propTypes = {
  avatar: PropTypes.string,
  data: PropTypes.object,
  avatarAutor: PropTypes.string,
  avatarProject: PropTypes.string,
};

export default CardPreview;
