import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import language from '../../utils/language'
import ActionLink from '../ActionLink/ActionLink'
import * as styles from './BioCard.module.scss'

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
        {language.homePage.aboutMeLink}
      </ActionLink>
    </section>
  )
}

export default BioCard
