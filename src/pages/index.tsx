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
      Hello <span>👋</span>
    </h1>
    <TextContent>
      <p>Hi. My name is Trevor. Welcome.</p>
      <p>
        I'm a web developer and former music manager living in Minneapolis, MN.
      </p>
      <p>Stick around and say hello if you feel like it. Thanks for visiting. It's good to have you.</p>
    </TextContent>
    <Socials />
  </Layout>
)

export default IndexPage
