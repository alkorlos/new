import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const Layout = ({children, data}) => {

  return (
    <div className="Layout">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {name: 'description', content: 'Sample'},
          {name: 'keywords', content: 'sample, something'}
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="Layout__content">
        {children()}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      }).isRequired
    }).isRequired
  }).isRequired
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
