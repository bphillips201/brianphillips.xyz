import React from 'react'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout/Layout'
import Wrapper from '../components/Wrapper/Wrapper'
import Circles from '../components/Circles/Circles'
import ActionLink from '../components/ActionLink/ActionLink'
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

      <p>I’m Brian Phillips, a software engineer, writer, and investor.</p>

      <h2>I’ve lived in some fun places.</h2>

      <p>
        At twenty-five, my wife and I moved out of small-town Mississippi to
        Memphis, Tennessee. Later, a new job took us to San Luis Obispo,
        California,{' '}
        <a
          href="https://www.theguardian.com/travel/2018/may/22/san-lius-obispo-california-happiest-us-city-oprah"
          target="blank"
        >
          one of America’s happiest cities
        </a>
        .
      </p>

      <p>
        Then, after five years on the West Coast, we drove 3,500 miles in the
        other direction and now spend our days in New York City.
      </p>

      <p>Life is good.</p>

      <StateMap />

      <h2>I’ve worked with some cool people.</h2>

      <p>
        I wrote my first line of (Java) code in college and spent the next
        couple years tinkering in C++ and Ruby. In my first job out of
        college—working in IT—I picked up JavaScript and learned to love
        development in the browser. I later worked as a web developer,
        collaborating with some splendid clients, and recently spent four years
        managing the front end engineering program at a global wellness company.
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
