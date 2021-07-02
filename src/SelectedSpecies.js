import React, { useState, useEffect } from 'react'

const SelectedSpecies = ({ species }) => {
  return (
    <div className="card-container">
      {species.map((item) => {
        return (
          <div className="card" key={item.swedishName}>
            <h2>{item.swedishName}</h2>
            <h3 className="latin-name">{item.scientificName}</h3>
            <h3>Biotoper</h3>
            {item.speciesData.map((item) => {
              return (
                <div key={item.id}>
                  <ul className="biotope-list" >
                    <li>{item.name} <span>{item.significance}</span></li>
                  </ul>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default SelectedSpecies