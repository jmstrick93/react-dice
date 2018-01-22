import React from 'react';

export const Navbar = () =>{
  return (
    <nav className='navbar navbar-expand-sm'>
      <a className='navbar-brand' href='#'>ReactDice</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsingNavbar">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="/">Dice</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/history">Roll History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/settings">Settings</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
