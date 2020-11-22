import React from 'react'
import { TPost } from '../../utils/constants'
import language from '../../utils/language'
import BioCard from '../BioCard/BioCard'
import PostList from '../PostList/PostList'
import SectionHeader from '../SectionHeader/SectionHeader'
import * as styles from './FeaturedContent.module.scss'

type TFeaturedContentProps = {
  [name: string]: TPost[]
}

const FeaturedContent: React.FC<TFeaturedContentProps> = props => {
  const { firstRead, featuredPosts } = props

  return (
    <>
      <SectionHeader as="h2">{language.homePage.featuredWriting}</SectionHeader>
      <section className={styles.featuredContent}>
        <PostList posts={firstRead} variant="first" backgroundImage={true} />
        <BioCard />
        <PostList
          posts={featuredPosts}
          variant="featured"
          backgroundImage={true}
        />
      </section>
    </>
  )
}

export default FeaturedContent
