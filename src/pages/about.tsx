import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper/wrapper'
import * as styles from '../components/layout/layout.module.scss'
import { Cell, Grid } from 'styled-css-grid'
import Circles from '../components/circles/circles'
import StateMap from '../components/stateMap/stateMap'
import ActionLink from '../components/actionLink/actionLink'

const About: React.FC = () => (
  <Layout className={styles.aboutPage}>
    <SEO title="About" />
    <Wrapper bigY={true}>
      <Circles />
    </Wrapper>

    <Wrapper width="thin">
      <h1>Engineer. Investor. Writer.</h1>

      <p>
        I grew up in a small Mississippi town and left home at 25 to work at fun
        companies with cool people. By trade, I’m a front end engineer who’s
        addicted to{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          TypeScript
        </a>{' '}
        and{' '}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Gatsby
        </a>
        ; when I’m not building websites and apps, I’m writing stories, scouting
        for investment opportunites, and playing a lot of video games.
      </p>

      <ul>
        <li>
          <ActionLink
            to="https://www.linkedin.com/in/bphillips201/"
            external={true}
          >
            View my LinkedIn profile
          </ActionLink>
        </li>

        <li>
          <ActionLink to="https://twitter.com/philianor" external={true}>
            Follow me on Twitter
          </ActionLink>
        </li>
      </ul>
    </Wrapper>

    {/* <Wrapper width="content" color="gray" bigY={true} align="center">
      <h2>I've lived in some fun places.</h2>

      <StateMap />
    </Wrapper> */}
  </Layout>
)

export default About
