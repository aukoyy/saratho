import React from 'react'
import Nav from './nav/nav'

const Layout = ({children, onHideNav, onShowNav, showNav}) => (
  <div className='flex justify-center'>
    <div className='md:w-1/2 xl:w-1/3'>
      <Nav onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div>{children}</div>
      <footer>
        <div >
          <div >
            &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
            &amp;
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
)

export default Layout
