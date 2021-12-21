import React from 'react'
import SEO from '../components/SEO/SEO'
import Layout from '../components/Layout'
import Circles from '../components/Circles/Circles'
import StateMap from '../components/StateMap/StateMap'
import { Link } from 'gatsby'

const About: React.FC = () => (
  <Layout>
    <SEO title="About" />

    <section className="mt-6 mb-24">
      <Circles />
    </section>

    <article className="max-w-screen-sm mx-auto pb-8">
      <h2>Hello and welcome.</h2>

      <p>
        I’m Brian Phillips, a writer, investor, and front end coder living in
        New York City.
      </p>

      <p className="font-header">
        <Link to="/now">See what I’m doing now</Link>
      </p>

      <h3>I have a blog you might enjoy.</h3>

      <p>
        I also send out a semi-infrequent newsletter with my latest posts, as
        well as the occasional list of cool books, video games, and more. It’s a
        fun time for geeks like me.
      </p>

      <p className="font-header">
        <Link to="/now">Sign up for my newsletter</Link>
      </p>

      <h3>I’ve lived in some fun places.</h3>

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

      <StateMap />
    </article>
  </Layout>
)

export default About
