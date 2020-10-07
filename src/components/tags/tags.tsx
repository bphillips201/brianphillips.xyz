import React from "react"
import * as styles from "./tags.module.scss"

type TTagProps = {
  tags: Array<string>
}

const Tag: React.FC<TTagProps> = ({ tags }) => {
  return <div className={styles.tag}>{tags.join(" / ")}</div>
}

export default Tag
