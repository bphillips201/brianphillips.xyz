import React from "react"
import * as styles from "./postLayout.module.scss"

const PostLayout: React.FC = ({ children }) => {
  return <article className={styles.article}>{children}</article>
}

export default PostLayout
