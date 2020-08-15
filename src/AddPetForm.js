import React, { useState } from 'react';

function AddPetForm(props) {

  const [name, setName] = useState();

  const [species, setSpecies] = useState();

  const [age, setAge] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.setPets(prev => prev.concat({ name, species, age, id: Date.now() }));
    setName('');
    setSpecies('');
    setAge('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input required autoComplete='false' autoCapitalize='true' value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <br />
        <input required autoComplete='false' autoCapitalize='true' value={species} onChange={e => setSpecies(e.target.value)} placeholder="Species" />
        <br />
        <input required autoComplete='false' autoCapitalize='true' value={age} onChange={e => setAge(e.target.value)} placeholder="Age In Years" />
        <br />
        <button className='submit'>Add Pet</button>
      </fieldset>
    </form>
  );
}

export default AddPetForm;