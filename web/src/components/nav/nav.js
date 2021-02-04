import React from 'react'
import Icon from '../icon'
import NavListItem from './nav-list-item'
import {cn} from '../../lib/helpers'

const Nav = ({onHideNav, onShowNav, showNav}) => (
  <div>

    <button onClick={showNav ? onHideNav : onShowNav} className='md:hidden fixed right-0 p-6 bg-white'>
      <Icon symbol='hamburger' />
    </button>

    <nav className={cn(showNav ? 'flex justify-center text-center' : 'hidden md:flex')}>
      <ul className='flex flex-col md:flex-row justify-around fixed md:relative w-2/3 md:w-full p-6 mt-16 border-pink-400 border-8 bg-white'>
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
)

export default Nav
