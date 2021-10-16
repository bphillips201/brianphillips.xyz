import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import language from '../../utils/language'
import ActionLink from '../ActionLink/ActionLink'
import * as styles from './BioCard.module.scss'

const BioCard: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 600, height: 600, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <section className={styles.bioCard}>
      <Img
        backgroundColor="#415065"
        fixed={data.avatar.childImageSharp.fixed}
      />
      <p>
        I’m Brian Phillips, a software engineer, writer, and investor living in
        New York City. See what I’m doing <Link to="/now">now</Link>.
      </p>
      <ActionLink
        to={`/about`}
        text={language.homePage.aboutMeLink}
        arrow="right"
      />
    </section>
  )
}

export default BioCard
