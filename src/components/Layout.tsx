import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { smallScreen } from '../styles/screenSizes'

import SideNav from './SideNav'

import '../styles/globals.css'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  height: 100vh;

  @media (max-width: ${smallScreen}px) {
    display: block;
  }
`

export const Wrapper = styled.div`
  padding: 20px 20px 40px;
  overflow: scroll;
`

interface Props {
  children: typeof React.Children
  currentUrlPath: string
}

interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout = ({ children, currentUrlPath, ...props }: Props) => {
  const renderData = (data: Data) => (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'x-robots-tag',
            content: 'all'
          },
          {
            name: 'description',
            content: 'Personal website of Trevor Litsey',
          },
          { name: 'keywords', content: 'trevor litsey' },
          { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
          { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          { property: 'og:title', content: 'Trevor Litsey' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'http://litseyt.me/' },
          { property: 'og:image', content: 'https://res.cloudinary.com/sadness/image/upload/v1525134507/trevorlitsey.com/josef.png' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'trevorlitsey.com' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Container {...props}>
        <SideNav currentUrlPath={currentUrlPath} />
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  )
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={renderData}
    />
  )
}

export default Layout
