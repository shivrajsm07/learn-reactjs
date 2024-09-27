import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <h2>Welcome to Quiz App</h2>
        <h3>Select quiz :</h3>
            <NavLink to='/java'><button>JAVA</button></NavLink><br></br>
            <NavLink to='/sql'><button>SQL</button></NavLink><br></br>
            <NavLink to='/html'><button>HTML</button></NavLink><br></br>      
    </div>
  )
}
