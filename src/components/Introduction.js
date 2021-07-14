import React from 'react'

const Introduction = () => {

  return (
    <div className="card">
      <h2>Vad är det här?</h2>
      <p>Det här är en Single Page Application som visar information om Upplands landskapsarter. Informationen hämtas från ArtDatabankens API Species information.</p>
      <p>API står för application programming interface (applikationsprogrammeringsgränssnitt). Genom ett API kan man dela med sig av sina data på ett kontrollerat sätt. Användarna får inte direkt tillgång till databasen, utan de får ta del av datat på det sätt som API:ets skapare bestämt.</p>
      <p>Att skapa ett API är ett bra sätt att bjuda in programmerare att använda datat. </p>
    </div>
  )
}

export default Introduction