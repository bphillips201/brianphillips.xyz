import React from "react"
import { TTag } from "../../utils/constants"
import * as styles from "./tags.module.scss"

const Tag: React.FC<TTag> = ({ tags }) => {
  return <div className={styles.tag}>{tags.join(" / ")}</div>
}

export default Tag
