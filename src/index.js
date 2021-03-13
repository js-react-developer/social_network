import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Slava' },
  { id: 2, name: 'Dimych' },
  { id: 3, name: 'Andrey' },
  { id: 4, name: 'Valera' },
  { id: 5, name: 'Sveta' },
  { id: 6, name: 'Pasha' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'I am fine. How are yo?' },
  { id: 4, message: 'I am good' }
]

let posts = [
  {id: 1, message: "It's my first message", likesCount: 10},
  {id: 2, message: "It's my second message", likesCount: 20},
  {id: 3, message: "It's my third message", likesCount: 30},
  {id: 4, message: "It's my fourth message", likesCount: 40}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
