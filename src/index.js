import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware } from "redux";
import userreducer from "./user.reducer";
import tweetreducer from "./tweet.reducer";
import "./styles.css";
const logger = state => next => action => {
  console.log("action fired", action);
  next(action);
};
const middleware = applyMiddleware(logger);
const reducers = combineReducers({ user: userreducer, tweets: tweetreducer });
const store = createStore(reducers, {}, middleware);
const rootElement = document.getElementById("root");
const App = ({ user, tweets }) => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>name : {user.name}</h2>
      <h2>age : {user.age}</h2>
      <ul>
        {tweets.map(l => {
          return <li>{l}</li>;
        })}
      </ul>
    </div>
  );
};

const render = () =>
  ReactDOM.render(
    <App user={store.getState().user} tweets={store.getState().tweets || []} />,
    rootElement
  );
store.subscribe(() => console.log("store updated", store.getState()));
store.dispatch({ type: "DEFAULTUSER" });
store.dispatch({ type: "ENTERTWEET" });
render();
