import { csrfFetch } from './csrf';


//Actions

const ADD_BEAT = 'beats/addBeat';

const LOAD_BEATS = 'beats/loadBeats';

const EDIT_BEAT = 'beats/editBeat';

const DELETE_BEAT = 'beats/deleteBeat';


//VIEW BEATS
const loadBeats = (beats) => {

  return {
      type: LOAD_BEATS,
      beats
  }
};

export const loadSomeBeats = () => async (dispatch) =>{
  // console.log('inside thunk')
  const res = await csrfFetch('/api/beats',{
    method: 'GET',
  }
  );
  const data = await res.json();
  // console.log(data)
  dispatch(loadBeats(data));
};

// ADD A BEAT
const addBeat = (beat) => {
  return {
      type: ADD_BEAT,
      beat
  }
};

export const addABeat = (beat) => async (dispatch) => {
// one more undo
const {title, imageUrl, audioUrl, key, userId, typeId } = beat
  const res = await csrfFetch('/api/beats', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title, imageUrl, audioUrl, key, userId, typeId})
  });
  const data = await res.json();
  dispatch(addBeat(data));
  // console.log(data)
  return data;
};

//EDIT A BEAT
const editBeat = (beat) => {
  return {
      type: EDIT_BEAT,
      beat
  }
};

export const editABeat = (editedBeat, id) => async(dispatch) => {
  const res = await csrfFetch(`/api/beats/${id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editedBeat)
  });
  const data = await res.json();
  dispatch(editBeat(data));
  return data;
}
// DELETE BEAT
const deleteBeat = (beat) => {
  return {
    type: DELETE_BEAT,
    beat
  }
}

export const deleteABeat = (beatId) => async (dispatch) => {
  const res = await csrfFetch( `/api/beats/${beatId}`,{
    method: 'DELETE',
  })
  const data = res.json();
  dispatch(deleteBeat(data))
  return data;
}

// Reducer

const beatReducer = (state = {}, action) => {
let newState = {};

  switch (action.type) {
    case LOAD_BEATS: {
      // console.log(action)
        newState = {...state}
        action.beats.forEach(beat => {
          newState[beat?.id] = beat;
        });
        return newState
      }
    case ADD_BEAT:
      // console.log('THIS IS THE ACTION',action)
      return {...state, [action.addBeat]: action.addBeat }

    case EDIT_BEAT:
      return {...state, [action.beat?.id]: action.beat }

    case DELETE_BEAT:
      newState = { ...state };
      delete newState.list[action.beat?.id];
      return newState;

    default:
      return state;
  }
};

export default beatReducer
