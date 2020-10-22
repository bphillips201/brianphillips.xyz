import React from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import {
  TAllContentfulCategories,
  TAllContentfulPosts,
} from '../utils/constants'
import language from '../utils/language'
import Wrapper from '../components/wrapper/wrapper'
import PostList from '../components/postList/postList'
import CategoryList from '../components/categoryList/categoryList'
import { Grid, Cell } from 'styled-css-grid'
import SectionHeader from '../components/sectionHeader/sectionHeader'
import BioCard from '../components/bioCard/bioCard'
import NewsletterForm from '../components/newsletterForm/newsletterForm'

type HomePageData = TAllContentfulPosts & TAllContentfulCategories

const IndexPage: React.FC<PageProps<HomePageData>> = ({ data }) => {
  const allPosts = data.allContentfulPosts.edges.map(n => n.node)
  const allCategories = data.allContentfulCategories.edges.map(n => n.node)
  const featuredPosts = allPosts.filter(p => p.isFeatured).slice(0, 3)
  const firstRead = allPosts.filter(p => p.isFirstFeatured).slice(0, 1)
  const latestPosts = allPosts.slice(0, 5)

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper color="gray">
        <SectionHeader>{language.homePage.featuredWriting}</SectionHeader>
        <Grid columns={3} gap="3.2rem" style={{ marginBottom: '3.2rem' }}>
          <Cell width={2}>
            <PostList
              posts={firstRead}
              variant="first"
              backgroundImage={true}
            />
          </Cell>
          <Cell width={1}>
            <BioCard />
          </Cell>
        </Grid>

        <PostList
          posts={featuredPosts}
          variant="featured"
          backgroundImage={true}
          style={{ marginBottom: '3.2rem' }}
        />

        <NewsletterForm />
      </Wrapper>

      <Wrapper>
        <Grid columns={4} gap={'3.2rem'}>
          <Cell width={3}>
            <SectionHeader>{language.homePage.latestPosts}</SectionHeader>
            <PostList posts={latestPosts} />
            <Link to={`/blog`}>{language.homePage.viewBlog}</Link>
          </Cell>

          <Cell width={1}>
            <SectionHeader>{language.homePage.topics}</SectionHeader>
            <CategoryList categories={allCategories} />
          </Cell>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const postQuery = graphql`
  query {
    allContentfulPosts(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate
          isFeatured
          isFirstFeatured
          content {
            content
          }
          category {
            title
            slug
          }
          heroImage {
            description
            fluid(
              toFormat: JPG
              resizingBehavior: FILL
              maxWidth: 800
              cropFocus: CENTER
              maxHeight: 400
              quality: 90
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulCategories {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
