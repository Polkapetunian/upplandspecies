import React, { useState, useEffect } from 'react'

const SelectedSpecies = ({ selectedSpecies, selectedRedlistInfo }) => {
  console.log(selectedRedlistInfo)

  const redlistValue = selectedRedlistInfo.speciesData.category


  return (
    selectedSpecies && selectedRedlistInfo &&
    <div className="card" key={selectedSpecies.swedishName}>
      <h2>{selectedSpecies.swedishName.charAt(0).toUpperCase() + selectedSpecies.swedishName.slice(1)}</h2>
      <h3 className="latin-name">{selectedSpecies.scientificName}</h3>
      <h3>Rödlistningskategori</h3>
      {redlistValue === 'NE' && <p>Ej bedömd</p>}
      {redlistValue === 'NA' && <p>Ej tillämplig</p>}
      {redlistValue === 'LC' && <p>Livskraftig</p>}
      {redlistValue === 'DD' && <p>Kunskapsbrist</p>}
      {redlistValue === 'NT' && <p>Nära hotad</p>}
      {redlistValue === 'VU' && <p>Sårbar</p>}
      {redlistValue === 'EN' && <p>Starkt hotad</p>}
      {redlistValue === 'CR' && <p>Akut hotad</p>}
      {redlistValue === 'RE' && <p>Nationellt utdöd</p>}
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