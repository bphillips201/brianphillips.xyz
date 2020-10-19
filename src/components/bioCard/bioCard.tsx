import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import * as styles from "./bioCard.module.scss";
import language from "../../utils/language";

const BioCard: React.FC = () => {
    const data = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "me.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <section className={styles.bioCard}>
            <Img fluid={data.avatar.childImageSharp.fluid} />
            <p>{language.homePage.aboutMe}</p>
            <Link to={`/about`}>Learn More</Link>
        </section>
    )
}

export default BioCard;