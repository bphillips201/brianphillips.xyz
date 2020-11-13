import React from 'react'
import { TPost } from '../../utils/constants'
import language from '../../utils/language'
import BioCard from '../bioCard/bioCard'
import PostList from '../postList/postList'
import SectionHeader from '../sectionHeader/sectionHeader'
import * as styles from './featuredContent.module.scss'

type TFeaturedContentProps = {
  [name: string]: TPost[]
}

const FeaturedContent: React.FC<TFeaturedContentProps> = props => {
  const { firstRead, featuredPosts } = props

  console.log(featuredPosts)

  return (
    <>
      <SectionHeader>{language.homePage.featuredWriting}</SectionHeader>
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
