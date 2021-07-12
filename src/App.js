import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'

import SpeciesList from './components/SpeciesList'
import SelectedSpecies from './components/SelectedSpecies'
import Burger from './components/Burger'

export const App = () => {
  const [species, setSpecies] = useState([])
  const [selectedSpeciesId, setSelectedSpeciesId] = useState(undefined)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.REACT_APP_API_KEY
      }
    }
    fetch('https://api.artdatabanken.se/information/v1/speciesdataservice/v1/speciesdata/biotopes?taxa=100067,100013,100763,1079,221913,245630', options)
      .then((res) => res.json())
      .then((json) => setSpecies(json))
      .catch(error => console.error(error))

  }, []);
  console.log(species)
  console.log(selectedSpeciesId)
  console.log(selectedSpecies)

  const selectedSpecies = species.find(item => item.taxonId === selectedSpeciesId)

  return (
    <div className="app-container">
      <h1>Upplands landskapsarter och deras biotoper</h1>
      <div className="main-container">
        <Burger open={open} setOpen={setOpen} />
        <SpeciesList species={species} setSelectedSpeciesId={setSelectedSpeciesId} open={open} setOpen={setOpen} />
        {selectedSpecies &&
          <SelectedSpecies species={species} selectedSpecies={selectedSpecies} />}
      </div>
    </div>
  )
}
