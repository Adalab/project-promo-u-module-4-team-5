//React
import { useState } from 'react';
import { Route, Routes } from 'react-router';
//services
import ls from '../services/localStorage';

//Components
import Header from './Header/Header';
import Form from './Project/Form';
import CardPreview from './Project/CardPreview';
import GetAvatar from './GetAvatar';
import Landing from './Landing/Landing';
// import Footer from "./Footer/Footer";

//Styles
import '../styles/App.scss';

function App() {
  //funciones, variables, handles,

  const dataObject = {
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    image: '',
    photo: '',
  };
  const [data, setData] = useState(ls.get('dataLS', dataObject));

  const [error, setError] = useState('');
  const [cardSectionIsVisible, setCardSectionIsVisible] = useState(false);
  const [cardUrl, setCardUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [avatarAutor, setAvatarAutor] = useState(ls.get('elAvatarAutor', ''));
  const [avatarProject, setAvatarProject] = useState(
    ls.get('elAvatarProject', '')
  );

  const updateAvAutor = (avatar) => {
    setAvatarAutor(avatar);
    ls.set('elAvatarAutor', avatar);
    setData({ ...data, ['image']: avatar });
    ls.set('dataLS', data);
  };
  const updateAvProject = (avatar) => {
    setAvatarProject(avatar);
    ls.set('elAvatarProject', avatar);
    setData({ ...data, ['photo']: avatar });
    ls.set('dataLS', data);
  };

  const handleClickInput = (value, id) => {
    setCardSectionIsVisible(false);
    setData({ ...data, [id]: value });
    //console.log('data', data)
    ls.set('dataLS', data);
  };

  const fetchInfoCard = () => {
    setIsLoading(true);
    fetch('https://dev.adalab.es/api/projectCard', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        //console.log(responseJSON);
        if (responseJSON.success === false) {
          setIsLoading(false);
          setError('Error en el servidor');
        } else {
          setIsLoading(false);
          setError('');
          setCardUrl(responseJSON.cardURL);
          // localStorage.setItem('datainfo', JSON.stringify(data));
        }
      });
  };

  const handleClickCreateCard = () => {
    if (
      data.name === '' ||
      data.slogan === '' ||
      data.repo === '' ||
      data.demo === '' ||
      data.technologies === '' ||
      data.desc === '' ||
      data.autor === '' ||
      data.job === ''
    ) {
      setError('Te has dejado campos por rellenar');
    } else {
      fetchInfoCard();
    }
    setCardSectionIsVisible(true);
  };

  //html
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/create-projects"
          element={
            <>
              <Header />
              <main className="main">
                <CardPreview
                  data={data}
                  avatarAutor={avatarAutor}
                  avatarProject={avatarProject}
                />
                <Form
                  data={data}
                  loading={isLoading}
                  handleClickInput={handleClickInput}
                  handleClickCreateCard={handleClickCreateCard}
                  cardSectionIsVisible={cardSectionIsVisible}
                  cardUrl={cardUrl}
                  error={error}
                  GetAvatar={GetAvatar}
                  updateAvAutor={updateAvAutor}
                  updateAvProject={updateAvProject}
                />
              </main>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
