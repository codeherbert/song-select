import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

const App = () => {
  return (
    <div className="ui container grid" style= {{marginTop: "20px"}}>
      <div className="ui row">
        <div className="column eight wide" style= {{borderRight: "2px solid rgba(34,36,38,.15)"}}>
          <SongList />
        </div>  
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;