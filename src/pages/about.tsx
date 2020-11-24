import React from 'react'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Wrapper from '../components/Wrapper/Wrapper'
import Circles from '../components/Circles/Circles'
import ActionLink from '../components/ActionLink/ActionLink'
import * as styles from '../components/Layout/Layout.module.scss'
import language from '../utils/language'
import StateMap from '../components/StateMap/StateMap'
import { Link } from 'gatsby'

const About: React.FC = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper bigY>
      <Circles />
    </Wrapper>

    <Wrapper width="thin" as="article">
      <h1>Hello and welcome.</h1>

      <p>I’m Brian Phillips, a front end engineer, writer, and investor.</p>

      <h2>I’ve lived in some fun places.</h2>

      <p>
        At twenty-five, I moved with my wife to Memphis, Tennessee, then later
        to San Luis Obispo, California.
      </p>

      <p>(In 2021, we’ll call NYC our home.)</p>

      <StateMap />

      <h2>I’ve worked with some cool people.</h2>

      <p>
        I’ve been a front end engineer for many years and recently spent four
        years leading a software engineering team at a global wellness company.
        Before that, I designed and built websites in the agency and freelance
        world for a few years, working with some splendid clients.
      </p>

      <p>
        In August 2020,{' '}
        <Link to="/blog/i-quit-my-job-with-no-plan-should-you-do-the-same">
          I quit my job to take a career break
        </Link>
        . Since then, I‘ve{' '}
        <a
          href="https://github.com/bphillips201"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          coded
        </a>{' '}
        daily, <Link to="/blog">written</Link> frequently, and ended most days
        with hikes and video games.
      </p>

      <p>
        <ActionLink
          to={language.about.linkedIn.url}
          text={language.about.linkedIn.text}
        />
      </p>

      <h2>I have a blog you might enjoy.</h2>

      <p>
        I’ve been a writer for many years. Recently, I’ve written things like a{' '}
        <Link to="/blog/31-lessons-learned-in-31-years">
          list of 31 life lessons learned in 31 years
        </Link>
        ,{' '}
        <Link to="/blog/the-multi-level-marketer-and-i">
          a tale of multi-level marketing indoctrination
        </Link>
        , and some{' '}
        <Link to="/blog/i-will-now-gush-about-words">
          cheeky thoughts on the joy of writing
        </Link>
        .
      </p>

      <p>
        I also send out a semi-infrequent newsletter with my latest posts, as
        well as the occasional list of cool books, video games, and more. It’s a
        fun time for geeks like me.
      </p>

      <p>
        <ActionLink
          to={language.about.newsletter.url}
          text={language.about.newsletter.text}
        />
      </p>
    </Wrapper>
  </Layout>
)

export default About
