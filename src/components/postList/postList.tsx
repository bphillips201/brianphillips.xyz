import React from "react"
import { TPost } from "../../utils/constants";
import { Link } from "gatsby"
import Category from "../category/category";
import BackgroundImage from 'gatsby-background-image'
import classnames from "classnames"
import * as styles from "./postList.module.scss";

type TPostList = {
    posts: Array<TPost>
    variant?: 'plain' | 'featured' | 'first',
    backgroundImage?: boolean,
}

const PostList: React.FC<TPostList> = props => {
  const { 
    posts, 
    variant = 'plain', 
    backgroundImage = false,
    ...rest 
  } = props;

  const postListClasses = classnames({
    [styles.postList]: true,
    [styles[variant]]: true
  });

  return (
    <ul className={postListClasses} {...rest}>
        {posts.map(post => (
          backgroundImage 
            ?
              <BackgroundImage
                Tag="li"
                fluid={post.heroImage.fluid}
                backgroundColor={`#dcdcdc`}
                key={post.id}>
                  <Link to={`/${post.slug}`}>
                    <Category readOnly={true} title={post.category.title} slug={post.category.slug} />
                    <h3>{post.title}</h3>
                  </Link>
              </BackgroundImage>
            :
              <li key={post.id}>
                <Category title={post.category.title} slug={post.category.slug} />
                <h3><Link to={`/${post.slug}`}>{post.title}</Link></h3>
              </li>
        ))}
    </ul>
  )
}

export default PostList
