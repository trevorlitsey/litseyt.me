import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { elevation1 } from '../styles/elevation'
import { smallScreen } from '../styles/screenSizes'

const links = [
  {
    to: '/',
    label: 'index',
  },
  {
    to: '/blue',
    label: 'blue',
  },
  {
    to: '/diypostmodern',
    label: 'diy postmodern',
  },
  {
    to: '/thisisnotasadboy',
    label: 'this is not a sad boy',
  },
  {
    to: '/fun',
    label: 'fun',
  },
  {
    to: '/links',
    label: 'links',
  },
  {
    to: '/contact',
    label: 'contact',
  },
]

const Wrapper = styled.div`
  background: white;
  box-shadow: ${elevation1}, 1px 1px 10px rgba(0, 0, 0, 0.05);
  height: 100%;
  padding: 40px 40px 40px 10px;

  ul {
    overflow-y: scroll;
    padding: 10px;
    list-style: none;
    margin: auto;
  }

  ul li {
    padding: 10px;
    white-space: nowrap;
    display: grid;
    grid-template-columns: 24px 4fr;
  }

  ul li span.pointer {
    color: rgba(0, 0, 0, 0);
  }

  ul li span.pointer.on {
    color: inherit;
  }

  li > a {
    color: inherit;
    text-decoration: none;
  }

  li > a:visited {
    color: inherit;
  }

  .fullwidth {
    grid-column: span 2;
    text-align: center;
    padding: 4px;
  }

  @media screen and (max-width: ${smallScreen}px) {
    display: flex;
    height: auto;
    padding: 10px;

    ul {
      padding: 0px;
      margin: auto;
    }
  }
`

const SideNav = ({ currentUrlPath = '' }) => {
  return (
    <Wrapper>
      <ul>
        {links.map(({ to, label }) => {
          const isIndex = to === '/'
          const on =
            (!isIndex && currentUrlPath.includes(to)) ||
            (isIndex && currentUrlPath === to)
          return (
            <li key={to}>
              <span className={`pointer ${on && 'on'}`}>→</span>{' '}
              <Link to={to}>{label}</Link>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default SideNav
