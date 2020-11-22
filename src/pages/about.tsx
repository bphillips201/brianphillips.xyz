import React from 'react'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Wrapper from '../components/Wrapper/Wrapper'
import Circles from '../components/Circles/Circles'
import ActionLink from '../components/ActionLink/ActionLink'
import * as styles from '../components/Layout/Layout.module.scss'
import language from '../utils/language'

const About: React.FC = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper bigY>
      <Circles />
    </Wrapper>

    <Wrapper width="thin">
      <h1>Hello and welcome.</h1>

      <p>
        I'm Brian Phillips, a software engineer, writer, and investor living in
        California. I grew up in a small southern town and left home at 25 to
        work at cool companies with cool people. In recent years, I was an
        engineering manager leading a team of 17 engineers.
      </p>

      <p>
        In August 2020, I took a career break, during which I've been spending
        time with my wife, building web apps, writing stories, and playing video
        games.
      </p>

      <ul className={styles.list}>
        <li>
          <ActionLink
            to={language.about.newsletter.url}
            text={language.about.newsletter.text}
          />
        </li>

        <li>
          <ActionLink
            to={language.about.linkedIn.url}
            text={language.about.linkedIn.text}
          />
        </li>
      </ul>
    </Wrapper>
  </Layout>
)

export default About
