import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'

import SpeciesList from './SpeciesList'
import SelectedSpecies from './SelectedSpecies'

export const App = () => {
  const [species, setSpecies] = useState([])

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
  console.log(setSpecies)
  return (
    <div className="app-container">
      <h1>Upplands landskapsarter och deras biotoper</h1>
      <SpeciesList species={species} />
      <SelectedSpecies species={species} />
    </div>
  )
}
