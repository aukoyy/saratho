import {Link} from 'gatsby'
import React from 'react'

const NavListItem = (props) => (

  <li className='text-xl mt-2 md:mt-0'>
    <Link to={props.link}>{props.text}</Link>
  </li>

)

export default NavListItem
