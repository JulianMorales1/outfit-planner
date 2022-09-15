import React, { useState } from 'react';
import './App.css';
import clothing from './clothes';

function App() {

  const [dressCode, setDressCode] = useState('formal');

  const handleCasualClick = () => {
    setDressCode('casual');
  };

  const handleSportClick = () => {
    setDressCode('sport');
  };

  const handleFormalClick = () => {
    setDressCode('formal');
  };

  const findItem = (type) => {
    const filteredItems = clothing.filter((clothingItem) => clothingItem.type === type && clothingItem.dressCode === dressCode);

    return filteredItems[Math.floor(Math.random() * filteredItems.length)]

  }

  return (

    <div>
      <h1>Outfit Planner</h1>
      <div>
        <button onClick={handleCasualClick}>
          Casual
        </button>
      </div>

      <div>
        <button onClick={handleSportClick}>
          Sport
        </button>
      </div>

      <div>
        <button onClick={handleFormalClick}>
          Formal
        </button>
      </div>

      <div>

        <h3>Top</h3>
        <div>
          <img src={findItem('top').imageUrl} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt='top' />
        </div>
        <h3>Bottom</h3>
        <div>
          <img src={findItem('bottom').imageUrl} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt='bottom' />
        </div>
        <h3>Shoes</h3>
        <div>
          <img src={findItem('shoes').imageUrl} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt='shoes' />
        </div>


      </div>


    </div>

  );
}

export default App;
