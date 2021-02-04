import {Link} from 'gatsby'
import React from 'react'

const NavListItem = (props) => (

  <li className='text-xl'>
    <Link to={props.link}>{props.text}</Link>
  </li>

)

export default NavListItem
