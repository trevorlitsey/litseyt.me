import React, { Fragment } from 'react'
import styled from 'styled-components'

import { TextContent } from '../components/elements'
import Layout from '../components/Layout'
import { gray2 } from '../styles/colors'
import { artLinks, peopleLinks, musicLinks } from '../data/links'

interface LinkListProps {
  links: Array<{
    label: string
    href: string
  }>
}

// typescript wines about returning an array of elements :(
const LinkList: React.SFC<LinkListProps> = ({ links }) => {
  return (
    <Fragment>
      {links.map(({ label, href }) => (
        <p key={href}>
          <strong style={{ paddingBottom: 10 }}>{label}</strong>: <br />
          <a
            className="no-underline"
            href={href}
            target="__blank"
            rel="noopener"
            style={{ wordBreak: 'break-all' }}
          >
            {href}
          </a>
        </p>
      ))}
    </Fragment>
  )
}

const LinksTitle = styled.p`
  font-size: 16px;
  border-bottom: 1px solid ${gray2};
`

interface LinksPageProps {
  location: {
    pathname: string
  }
}

const LinksPage: React.SFC<LinksPageProps> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>links 🔗</h1>
      <TextContent>
        <p style={{ textAlign: 'center' }}>
          <i>just a lil list</i>
        </p>
        <LinksTitle>Art:</LinksTitle>
        <LinkList links={artLinks} />
        <LinksTitle>People:</LinksTitle>
        <LinkList links={peopleLinks} />
        <LinksTitle>Music:</LinksTitle>
        <LinkList links={musicLinks} />
      </TextContent>
    </Layout>
  )
}

export default LinksPage
