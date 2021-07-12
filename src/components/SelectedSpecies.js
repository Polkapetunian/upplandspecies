import React, { useState, useEffect } from 'react'

const SelectedSpecies = ({ selectedSpecies }) => {

  return (
    selectedSpecies &&
    <div className="card" key={selectedSpecies.swedishName}>
      <h2>{selectedSpecies.swedishName}</h2>
      <h3 className="latin-name">{selectedSpecies.scientificName}</h3>
      <h3>Viktiga biotoper</h3>
      {selectedSpecies.speciesData.filter(item => item.significance === "Viktig").map((item) => {
        return (
          <div key={item.id}>
            <ul className="biotope-list" >
              <li>{item.name}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default SelectedSpecies