import React, { Fragment } from 'react'
import styled from 'styled-components'

import Card from './Card'
import { smallScreen } from '../styles/screenSizes'
import { Site } from '../types/index'

const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 840px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;

  @media (max-width: ${smallScreen}px) {
    grid-template-columns: 1fr;
  }
`

interface Props {
  title?: string
  sites: Site[]
}

const Section: React.SFC<Props> = ({ sites, children }) => {
  return (
    <Wrapper>
      {sites.map((site, index) => (
        <Card key={index} {...site} />
      ))}
    </Wrapper>
  )
}

export default Section
