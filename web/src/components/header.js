import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div>
    <div>

      <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav>
        <ul>
          <li>
            <Link to='/'>Main</Link>
          </li>
          <li>
            <Link to='/blog/'>Blog</Link>
          </li>
          <li>
            <Link to='/shop/'>Shop</Link>
          </li>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/Colab/'>Colab</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
