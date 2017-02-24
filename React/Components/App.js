import React from 'react';
import Sidebar from './Sidebar.js';

const App = ({ children }) => {

  return (

    <div id="main" className="container-fluid">
      <div className="col-xs-2">
        <Sidebar />
      </div>
      <div className="col-xs-10">
        { children }
      </div>
    </div>
  );
}


export default App;
