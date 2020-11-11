import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as styles from './bioCard.module.scss'
import language from '../../utils/language'
import ActionLink from '../actionLink/actionLink'

const BioCard: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(cropFocus: CENTER, width: 600, height: 600, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className={styles.bioCard}>
      <Img fixed={data.avatar.childImageSharp.fixed} />
      <p>{language.homePage.aboutMe}</p>
      <ActionLink to={`/about`} arrow="right">
        Learn More
      </ActionLink>
    </section>
  )
}

export default BioCard
