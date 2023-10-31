import PropTypes from 'prop-types';
import defaultAvatar from '../images/faviconNuevo.png';
import '../styles/Profile.css';

function Profile(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div className="profile">
      <div
        className="profile__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
};

export default Profile;
