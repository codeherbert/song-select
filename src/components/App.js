import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

const stylesContainer = {
  marginTop: "20px",
  backgroundColor: "#f8f5ec",
  border: "2px solid grey",
  boxShadow: "10px 5px 5px grey"
}

const App = () => {
  return (
    <div className="ui container grid" style= {stylesContainer}>
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