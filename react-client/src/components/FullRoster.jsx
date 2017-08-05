import React from 'react'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div>
    <ul>
      Player List was Here
    </ul>
  </div>
)

export default FullRoster

      // {
      //   PlayerAPI.all().map(p => (
      //     <li key={p.number}>
      //       <Link to={`/roster/${p.number}`}>{p.name}</Link>
      //     </li>
      //   ))
      // }