import React, { useState, useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// import {Link} from 'react-router-dom'
import EditBeatForm from '../EditBeat'

import { loadSomeBeats, deleteABeat } from  '../../store/beats'
import './details.css'
const SingleBeat = ({ beats }) => {
  const { id } = useParams();
  const beat = beats[id]
  // console.log('THIS IS THE ID',id)
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [showEditBeat, setShowEditBeat] = useState(false);

    useEffect(() => {
        dispatch(loadSomeBeats())
    }, [dispatch]);


    const handleDelete = async () => {
      const deletedBeat = await dispatch(deleteABeat(id))
      if (deletedBeat)
        history.push('/beats')
        // history.goBack()
  }
  let userActions = null;
  if (sessionUser.id === beat?.userId) {
    userActions = (
      <div className="2-buttons">
        <button value={beat?.id} onClick={() => setShowEditBeat(true)}>Edit</button>
        <button className='delete-button' onClick={handleDelete}>Delete</button>
      </div>
    )
  }
  let form = null
  if(showEditBeat) {
    form = (<EditBeatForm id={beat?.id} beat={beat} hideForm={()=>setShowEditBeat(false)} />)
  }

  return (
    <div>
      <h1>Beat Details: </h1>
      <h2>Title: {beat?.title}</h2>
      <h3>Key: {beat?.key}</h3>
      <img className='beatPic' alt={`${beat?.title}`} src={beat?.imageUrl} />
      {/* <button className='delete-button' onClick={handleDelete}>DELETE</button> */}
      {/* <button className='edit-button' onClick={editABeat}>EDIT</button> */}
      {userActions}
      {form}
    </div>
    )
  }


  export default SingleBeat;
