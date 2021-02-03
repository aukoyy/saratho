import {Link} from 'gatsby'
import React from 'react'

const NavListItem = (props) => (

  <li className='px-4 text-xl'>
    <Link to={props.link}>{props.text}</Link>
  </li>

)

export default NavListItem
