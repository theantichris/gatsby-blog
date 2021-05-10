import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <div>{data.site.siteMetadata.title}</div>}
    />
  )
}

const Layout = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Layout
