import React from 'react'
import Nav from './nav/nav'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Nav siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
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
  </>
)

export default Layout
