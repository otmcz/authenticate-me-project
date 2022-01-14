import React, { useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { addABeat } from "../../store/beats";

const Upload = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [key, setKey] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id

  const handleCancel = (e) => {
    e.preventDefault();
    setTitle('');
    setKey('');
    setImageUrl('');
    setAudioUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrors([])
    const beat = {
        title,
        key,
        imageUrl,
        audioUrl,
        typeId: 3,
        userId,
    }

    let newBeat
    newBeat = await dispatch(addABeat(beat))
    // console.log('THIS IS THE RESPONSE',newBeat)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
    });
    if (newBeat) {
      history.push('/');
    }
}
  return (
    <div>
      <h1>Upload a beat</h1>
      <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
       </ul>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        />
         <input
        type="text"
        name="key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Key"
        required
        />
        <input
        type="text"
        name="audioUrl"
        value={audioUrl}
        onChange={(e) => setAudioUrl(e.target.value)}
        placeholder="Paste your beat URL"
        required
        />
        <input
        type='text'
        name='imageUrl'
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder='Paste your image URL'
        required
        />
        <button type="submit">Upload Your Beat</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
    )
  }


  export default Upload;
