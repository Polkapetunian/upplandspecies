import React, { useState, useEffect } from 'react'

const SpeciesList = ({ species, setSelectedSpeciesId, open }) => {

  return (
    <nav className={open ? "navbar" : "closed-navbar"} role="navigation">
      {species.map((item) => {
        return (
          <ul className="species-list" key={item.swedishName}>
            <li onClick={() => setSelectedSpeciesId(item.taxonId)}>{item.swedishName}</li>
          </ul>
        )
      })}
    </nav>
  )
}
export default SpeciesList

//eslint-disable-next-line react-hooks/exhaustive-deps