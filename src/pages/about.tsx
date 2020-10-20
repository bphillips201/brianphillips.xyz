import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper/wrapper"
import * as styles from "../components/layout/layout.module.scss"
import { Cell, Grid } from "styled-css-grid"
import Circles from "../components/circles/circles"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper className={styles.aboutPage} bigY={true}>
      <Grid columns={2} gap="3.2rem">
        <Cell>
          <h1>Engineer<br/>Investor<br/>Writer</h1>
        </Cell>
        <Cell middle center>
          <Circles />
        </Cell>
      </Grid>
    </Wrapper>

    <Wrapper width="content" color="gray" bigY={true}>
      <h2>
        Hi, nice to meet you.
      </h2>

      <p>
        I'm Brian. Here are some links.
      </p>

      <ul>
        <li><a href="https://www.linkedin.com/in/bphillips201/" target="_blank" rel="noopener noreferrer nofollow">View my LinkedIn profile</a></li>
        <li><Link to={`/readme`}>View my Manager README</Link></li>
      </ul>
    </Wrapper>
  </Layout>
)

export default About
