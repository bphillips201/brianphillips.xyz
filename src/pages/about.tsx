import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Wrapper from '../components/wrapper/wrapper'
import * as styles from '../components/layout/layout.module.scss'
import { Cell, Grid } from 'styled-css-grid'
import Circles from '../components/circles/circles'
import StateMap from '../components/stateMap/stateMap'

const About = () => (
  <Layout className={styles.aboutPage}>
    <SEO title="About" />
    <Wrapper bigY={true}>
      <Grid columns={2} gap="3.2rem">
        <Cell>
          <h1>
            Engineer
            <br />
            Investor
            <br />
            Writer
          </h1>
        </Cell>
        <Cell middle center>
          <Circles />
        </Cell>
      </Grid>
    </Wrapper>

    <Wrapper width="content" color="gray" bigY={true} align="center">
      <h2>I've lived in some fun places.</h2>

      <StateMap />

      {/* <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/bphillips201/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            View my LinkedIn profile
          </a>
        </li>
        <li>
          <Link to={`/readme`}>View my Manager README</Link>
        </li>
      </ul> */}
    </Wrapper>
  </Layout>
)

export default About
