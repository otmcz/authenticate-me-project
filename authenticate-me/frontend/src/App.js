// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Beats from "./components/BeatsPage";
import SingleBeat from "./components/SingleBeat"
import HomePage from "./components/HomePage"
import Upload from "./components/Upload"
import {loadSomeBeats} from "./store/beats"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const beats = useSelector(state => state.beats);
  // const beats = useSelector(state => state.beats.list)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(loadSomeBeats())
  }, [dispatch]);

  return (
    <div className='main'>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage isLoaded={isLoaded} />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/beats">
            <Beats />
          </Route>
          <Route path="/beats/:id">
            <SingleBeat beats={beats}/>
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
