import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GetAvatar.css';

function GetAvatar({ updateAvatar, text }) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    updateAvatar(image);
  };

  return (
    <div className="get-avatar">
      <label className="get-avatar__label">
        {text}
        <input
          type="file"
          ref={myFileField}
          style={{ display: 'none' }}
          onChange={uploadImage}
        />
      </label>
    </div>
  );
}

GetAvatar.propTypes = {
  updateAvatar: PropTypes.func,
  text: PropTypes.string,
};

export default GetAvatar;
