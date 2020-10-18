import React from "react"
import * as styles from "./sectionHeader.module.scss"

const SectionHeader: React.FC = props => {
    return <div className={styles.sectionHeader}>{props.children}</div>
}

export default SectionHeader
