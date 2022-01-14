import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editABeat } from '../../store/beats';
import { useHistory } from 'react-router-dom';

import './EditBet.css'
const EditBeatForm = ({ id, beat, hideForm }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(state => state.session.user[id]);

  const [title, setTitle] = useState(beat?.title)
  const [imageUrl, setImageUrl] = useState(beat?.imageUrl)
  // const [audioUrl, setAudioUrl] = useState(beat.audioUrl)
  const [key, setKey] = useState(beat?.key)
  const [errors, setErrors] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const beat = {
      userId,
      key,
      title,
      imageUrl,
      // audioUrl,
    };
    // setErrors([]);

    let editedBeat;
    editedBeat = await dispatch(editABeat(beat,id ))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
      }
    );
    if (editedBeat) {
      hideForm();
      history.push('/beats')
      // history.goBack()
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    // hideForm();
  };

  return (
      <form className= 'editForm' onSubmit={handleSubmit}>
        <h2>Edit beat:</h2>
        <ul className='errors'>
            {errors.map((error, idx) => <li className='errors'key={idx}>{error}</li>)}
        </ul>
        <label>Edit Title</label>
        <input
          id='title'
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Edit Key</label>
        <input
          type="text"
          placeholder="Key"
          value={key}
          onChange={(e)=> setKey(e.target.value)}
        />
        <label>Edit Image</label>
        <input
          type="text"
          placeholder="Image Url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button className='submit-button' type="submit">Update Beat</button>
        <button className='cancel-button' onClick={handleCancelClick}>Cancel</button>
      </form>
  );
};

export default EditBeatForm;
