import React, { useState, useEffect, useRef } from 'react'

import Introduction from './components/Introduction'
import SpeciesList from './components/SpeciesList'
import SelectedSpecies from './components/SelectedSpecies'
import Burger from './components/Burger'
import { useOnClickOutside } from './hooks'

export const App = () => {
  const [species, setSpecies] = useState([])
  const [redlistInfo, setRedlistInfo] = useState([])
  const [selectedSpeciesId, setSelectedSpeciesId] = useState(undefined)
  const [open, setOpen] = useState(false)

  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

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
      .catch((error) => console.error(error))
  }, []);

  const selectedSpecies = species.find((item) => item.taxonId === selectedSpeciesId);

  useEffect(() => {
    const options2 = {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.REACT_APP_API_KEY
      }
    }
    fetch('https://api.artdatabanken.se/information/v1/speciesdataservice/v1/speciesdata/redlist?taxa=100067,100013,100763,1079,221913,245630&period=6', options2)
      .then((res) => res.json())
      .then((json) => setRedlistInfo(json))
      .catch((error) => console.error(error))
  }, []);

  const selectedRedlistInfo = redlistInfo.find((item) => item.taxonId === selectedSpeciesId);

  return (
    <div className="app-container">
      <h1 className="top-header">Upplands landskapsarter</h1>
      <div className="main-container">
        <div className="nav-container" ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <SpeciesList
            species={species}
            setSelectedSpeciesId={setSelectedSpeciesId}
            open={open}
            setOpen={setOpen} />
        </div>
        {!selectedSpecies
          && <Introduction />}
        {selectedSpecies
          && <SelectedSpecies
            species={species}
            selectedSpecies={selectedSpecies}
            selectedRedlistInfo={selectedRedlistInfo} />}
      </div>
    </div>
  )
}
