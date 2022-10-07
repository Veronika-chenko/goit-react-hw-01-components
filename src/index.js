import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// import user from '../user.json';

// приклад використання:
/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> */
 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.querySelector('root')
);


