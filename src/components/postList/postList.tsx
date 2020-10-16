import React from "react"
import { TPost } from "../../utils/constants";
import { Link } from "gatsby"
import Tag from "../tags/tags";
import * as styles from "./postList.module.scss";

type TPostList = {
    posts: Array<TPost>
}

const PostList: React.FC<TPostList> = ({ posts }) => {
  return (
    <ul className={styles.postList}>
        {posts.map(post => (
            <li key={post.id}>
                <Tag tags={post.tags} />
                <h3><Link to={post.slug}>{post.title}</Link></h3>
            </li>
        ))}
    </ul>
  )
}

export default PostList
