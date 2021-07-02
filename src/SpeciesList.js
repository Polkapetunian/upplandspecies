import React, { useState, useEffect } from 'react'

const SpeciesList = () => {
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
      .then((json) => setSpecies(json));
    // .then((json) => setSpecies(json));
    //console.log(species)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(species)

  return (
    <div className="card-container">
      {species.map((item) => {
        return (
          <div className="card" key={item.swedishName}>
            <h2>{item.swedishName}</h2>
            <h3>{item.scientificName}</h3>
            {item.speciesData.map((item) => {
              return (
                <ul className="biotope-list" key={item.id}>
                  <li>{item.name} <span>{item.significance}</span></li>
                </ul>
              )
            })}
          </div>
        )
      })}

      <p></p>
    </div>
  )
}
export default SpeciesList