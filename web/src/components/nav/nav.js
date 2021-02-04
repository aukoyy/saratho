import React from 'react'
import Icon from '../icon'
import NavListItem from './nav-list-item'

const Nav = ({onHideNav, onShowNav, showNav}) => (
  <div>
    <div>

      <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className='flex justify-center'>
        <ul className='flex justify-around w-1/3 p-6 border-pink-400 border-8'>
          <NavListItem
            link='/'
            text='Home'
          />
          <NavListItem
            link='/blog/'
            text='Blog'
          />
          <NavListItem
            link='/shop/'
            text='Shop'
          />
          <NavListItem
            link='/about/'
            text='About'
          />
          <NavListItem
            link='/colab/'
            text='Colab'
          />

        </ul>
      </nav>
    </div>
  </div>
)

export default Nav
