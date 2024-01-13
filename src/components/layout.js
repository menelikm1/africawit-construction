import * as React from 'react'
import Header from './header'
import {
    container,
    heading,
    main
} from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Header></Header>
      <main className={main}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout