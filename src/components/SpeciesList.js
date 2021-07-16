import React from 'react'

const SpeciesList = ({ species, setSelectedSpeciesId, open }) => {
  return (
    <nav className={open ? 'navbar' : 'closed-navbar'}>
      <button className="navlink" type="button" onClick={() => setSelectedSpeciesId('')} onKeyDown={() => setSelectedSpeciesId('')}>Vad är detta?</button>
      <p className="navheading">Välj en art</p>
      {
        species.map((item) => {
          return (
            <ul className="species-list" key={item.swedishName}>
              <li
                key={item.taxonId}>
                <h3>
                  <button
                    type="button"
                    className="button-link"
                    onClick={() => setSelectedSpeciesId(item.taxonId)}
                    onKeyDown={() => setSelectedSpeciesId(item.taxonId)}>
                    {item.swedishName}
                  </button>
                </h3>
              </li>
            </ul>
          )
        })
      }
    </nav>
  )
}
export default SpeciesList
