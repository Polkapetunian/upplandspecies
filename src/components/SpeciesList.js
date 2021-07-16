import React from 'react'

const SpeciesList = ({ species, setSelectedSpeciesId, open }) => {

  return (
    <nav className={open ? "navbar" : "closed-navbar"}>
      <p className="navlink" onClick={() => setSelectedSpeciesId('')}>Vad är detta?</p>
      <p className="navheading">Välj en art</p>
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
