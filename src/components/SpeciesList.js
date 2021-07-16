import React from 'react'

const SpeciesList = ({ species, setSelectedSpeciesId, open }) => {
  return (
    <nav className={open ? "navbar" : "closed-navbar"}>
      <button className="navlink" onClick={() => setSelectedSpeciesId('')} onKeyDown={() => setSelectedSpeciesId('')}>Vad är detta?</button>
      <p className="navheading">Välj en art</p>
      {
        species.map((item) => {
          return (
            <ul className="species-list" key={item.swedishName}>
              <li
                onClick={() => setSelectedSpeciesId(item.taxonId)}
                onKeyDown={() => setSelectedSpeciesId(item.taxonId)}>{item.swedishName}</li>
            </ul>
          )
        })}
    </nav >
  )
}
export default SpeciesList
