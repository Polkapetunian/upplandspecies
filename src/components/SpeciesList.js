import React, { useState, useEffect } from 'react'

const SpeciesList = ({ species, setSelectedSpeciesId }) => {

  return (
    <div className="navbar">
      {species.map((item) => {
        return (
          <ul className="navbar" key={item.swedishName}>
            <button onClick={() => setSelectedSpeciesId(item.taxonId)}><li >{item.swedishName}</li></button>
          </ul>
        )
      })}
    </div>
  )
}
export default SpeciesList

//eslint-disable-next-line react-hooks/exhaustive-deps