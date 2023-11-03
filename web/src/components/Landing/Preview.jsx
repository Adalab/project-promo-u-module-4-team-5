/* eslint-disable react/prop-types */
import '../../styles/layouts/CardPreview.scss';

const Preview = ({data}) => {
  return (
    <div>

<section className="preview">
     <section className="autor">
        <section className="info-project">
          <p className="subtitle">Personal Project Card</p>
          <hr className="line" />

          <h2 className="title">{data.name}</h2>
          <p className="slogan">{data.slogan}</p>
          <p className="desc">
            {data.desc}
          </p>
          <div className="techDemoRepo">
            <section className="technologies">
              <p className="text">{data.technologies}</p>
            </section>
            <section className="demo repo">
              <a href={data.demo} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-globe"></i>
              </a>
              <a href={data.repo} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </section>
          </div>
        </section>

        <section className="info-autor">
          <img
            className="image"
            src={data.image}
            alt=""
          />
          <p className="job">{data.job}</p>
          <p className="name">{data.author} </p>
        </section>
      </section>
    </section>

    </div>
  )
}

export default Preview