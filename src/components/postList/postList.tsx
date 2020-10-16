import React from "react"
import { TPost } from "../../utils/constants";
import { Link } from "gatsby"
import Category from "../category/category";
import * as styles from "./postList.module.scss";

type TPostList = {
    posts: Array<TPost>
}

const PostList: React.FC<TPostList> = ({ posts }) => {
  return (
    <ul className={styles.postList}>
        {posts.map(post => (
            <li key={post.id}>
                <Category cat={post.category} />
                <h3><Link to={`/${post.slug}`}>{post.title}</Link></h3>
            </li>
        ))}
    </ul>
  )
}

export default PostList
