import React, { useEffect} from "react";
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// import {Link} from 'react-router-dom'

import { loadSomeBeats, deleteABeat } from  '../../store/beats'

const SingleBeat = ({beats}) => {
  // const [beat,setBeat] = []
  const { id } = useParams();
  const beat = beats[id]
  // console.log('THIS IS THE ID',id)
  const dispatch = useDispatch();
  const history = useHistory();

    useEffect(() => {
        dispatch(loadSomeBeats())
    }, [dispatch]);


    const handleDelete = async () => {
      const deletedBeat = await dispatch(deleteABeat(id))
      if (deletedBeat)
        history.goBack()
  }
  return (
    <div>
      <h1>Beat: </h1>
      <h3>{beat?.title}</h3>
      <p>Key: {beat?.key}</p>
      <img className='beatPic' alt={`${beat?.title}`} src={beat?.imageUrl} />
      <button onClick={handleDelete}>DELETE</button>
    </div>
    )
  }


  export default SingleBeat;
