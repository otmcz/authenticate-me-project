import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {loadSomeBeats} from  '../../store/beats'

const Beats = () => {
  // const [beat,setBeat] = []
  const dispatch = useDispatch();

  const beatsList = useSelector(state => state.beats);
  // console.log('THIS ARE MY BEATS', beatsList)
  const beats = Object.values(beatsList)
    useEffect(() => {
        dispatch(loadSomeBeats())
    }, [dispatch]);

  return (
    <div>
      <h2>Beats:</h2>
      <div>{beats.map((beat) => {
        // console.log('!!!!!',beats)
        return(
          <div key={beat?.id} id={beat?.id}>
            <h3>{beat.title}</h3>
            <Link to={`/beats/${beat?.id}`}>
              <img className='beatImage' alt={`${beat?.title}`} src={beat?.imageUrl} />
            </Link>
          </div>
      )
      })}
      </div>
    </div>
    )
  }


  export default Beats;
