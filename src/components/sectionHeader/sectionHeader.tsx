import React from 'react'
import * as styles from './sectionHeader.module.scss'

const SectionHeader: React.FC = props => {
  return <h4 className={styles.sectionHeader}>{props.children}</h4>
}

export default SectionHeader
