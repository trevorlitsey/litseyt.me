import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import { TextContent } from '../components/elements'
import Socials from '../components/Socials'

interface Props {
  location: {
    pathname: string
  }
}

const IndexPage: React.SFC<Props> = ({ location: { pathname } }) => (
  <Layout currentUrlPath={pathname}>
    <h1>
      hello <span>👋</span>
    </h1>
    <TextContent>
      <p
        style={{
          textAlign: 'center',
        }}
      >
        hi :)
      </p>
    </TextContent>
    <Socials />
  </Layout>
)

export default IndexPage
