import React from 'react'
import Jumbotron from '../components/Jumbotron';

function NoMatch() {
  return (
    <div className="container">
      <Jumbotron
        title="404"
        subtitle="Page Not Found"
        instructions="Please try searching for another book."
      />
    </div>
  )
}

export default NoMatch;