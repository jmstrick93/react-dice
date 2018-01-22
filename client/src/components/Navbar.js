import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () =>{
  return (
    <nav className='navbar navbar-expand-sm'>
      <NavLink className='navbar-brand' to='/'>ReactDice</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsingNavbar">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Dice</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/history">Roll History</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
