//React
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
//Services
import ls from '../services/localStorage';

//Components
import Header from './Header/Header';
import Form from './Project/Form';
import CardPreview from './Project/CardPreview';
import GetAvatar from './GetAvatar';
import Landing from './Landing/Landing';

//Styles
import '../styles/App.scss';

function App() {
  const dataEmptyObject = {
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
  const [data, setData] = useState(ls.get('dataLS', dataEmptyObject));

  const [error, setError] = useState('');
  const [cardSectionIsVisible, setCardSectionIsVisible] = useState(false);
  const [cardUrl, setCardUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [avatarAutor, setAvatarAutor] = useState('');
  const [avatarProject, setAvatarProject] = useState('');

  useEffect(() => ls.set('dataLS', data), [data]);

  const updateAvAutor = (avatar) => {
    setAvatarAutor(avatar);
    setData({ ...data, ['image']: avatar });
  };
  const updateAvProject = (avatar) => {
    setAvatarProject(avatar);
    setData({ ...data, ['photo']: avatar });
  };

  const handleClickInput = (value, id) => {
    setCardSectionIsVisible(false);
    setData({ ...data, [id]: value });
  };

  const fetchInfoCard = () => {
    setIsLoading(true);
    fetch('http://localhost:3110/createproject', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON.success === false) {
          setIsLoading(false);
          setError('Error en el servidor');
        } else {
          setIsLoading(false);
          setError('');
          setCardUrl(responseJSON.cardURL);
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
      setData(dataEmptyObject);
      setAvatarAutor('');
      setAvatarProject('');
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
