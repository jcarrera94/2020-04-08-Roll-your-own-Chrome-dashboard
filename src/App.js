import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PickupLine from './components/pickupLine';

function App() {

  const [pickupLine, setPickupLine] = useState();
  const [image, setImage] = useState();
  const w = window.innerWidth;
  const h = window.innerHeight;

  useEffect(() => {
    fetch(`https://picsum.photos/${w}/${h}`)
    .then(res => res.blob())
    .then(image => setImage(URL.createObjectURL(image)))
  }, [])

  const onClick = () => {
    fetch('http://pebble-pickup.herokuapp.com/tweets/random')
    .then(res => res.json())
    .then(({ tweet }) => {
      setPickupLine(tweet);
    });
  }

  return (
    <div className="App" style={{
      backgroundImage: `url(${image})`
      }}>
      <h1>Hello my friend!!!!</h1>
      <PickupLine onClick={onClick} pickupLine={pickupLine ? pickupLine : 'Get a pickup line by clicking the button below!!!'}/>
    </div>
  );
}

export default App;
