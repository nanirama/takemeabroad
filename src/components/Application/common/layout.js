import React, { useContext } from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FirebaseContext } from "../../Firebase"
import SEO from '../../seo'

const Layout = ({ children }) => {
  const { firebase } = useContext(FirebaseContext)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  function handleLogoutClick() {
    firebase.logout().then(() => navigate("/"))
  }
  return (
    <div class="wrapper white">
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.title} />
      <span onClick={handleLogoutClick}>Logout</span>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
