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
  console.log('inside thunk')
  const res = await csrfFetch('/api/beats');
  const data = await res.json();
  console.log(data)
  dispatch(loadBeats(data));
};

// ADD A BEAT
const addBeat = (newBeat) => {
  return {
      type: ADD_BEAT,
      newBeat
  }
};

export const addABeat = (newBeat) => async (dispatch) => {
// one more undo
  const res = await csrfFetch('/api/beats', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newBeat)
  });
  const data = await res.json();
  dispatch(addBeat(data));
  // console.log(data)
  return data;
};

//EDIT A BEAT
const editBeat = (editedBeat) => {
  return {
      type: EDIT_BEAT,
      editedBeat
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
const deleteBeat = (id) => {
  return {
    type: DELETE_BEAT,
    id
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
      console.log(action)
        newState = {...state}
        action.beats.forEach(beat => {
          newState[beat.id] = beat;
        });
        return newState
      }
    case ADD_BEAT:
      // console.log('THIS IS THE ACTION',action)
      return {...state, [action.addBeat]: action.addBeat }

    case EDIT_BEAT:
      return {...state, [action.beat.id]: action.beat }

    case DELETE_BEAT:
      newState = { ...state };
      delete newState.list[action.beat.id];
      return newState;

    default:
      return state;
  }
};

export default beatReducer
