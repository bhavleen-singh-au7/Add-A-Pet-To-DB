import React, { useState, useEffect } from 'react';
import Header from './Header';
import LikeArea from './LikeArea';
import TimeArea from './TimeArea';
import AddPetForm from './AddPetForm';
import Pet from './Pet';
import Footer from './Footer';

function App() {

  const [pets, setPets] = useState([]);

  // only run once the first time this componenet is rendered
  useEffect(() => {
    if (localStorage.getItem('examplePetData')) {
      setPets(JSON.parse(localStorage.getItem('examplePetData')));
    }
  }, []);

  // run every time our pet state changes
  useEffect(() => {
    localStorage.setItem('examplePetData', JSON.stringify(pets));
    // Our pets data is in array, whereas localStorage in browser only accepts a simple string of text not code or data
    // to overcome this, we'll use JSON.stringify (nd pass the state i.e, pets)
  }, [pets]);

  return (
    <>
      <Header />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map(pet => <Pet setPets={setPets} id={pet.id} name={pet.name} species={pet.species} age={pet.age} key={pet.id} />)}
      </ul>
      <Footer />
    </>
  );
}

export default App;
