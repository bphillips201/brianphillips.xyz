import React, { AllHTMLAttributes, ReactNode } from 'react'
import * as styles from './SectionHeader.module.scss'

type TSectionHeaderProps = AllHTMLAttributes<HTMLElement> & {
  as?: ReactNode
}

const SectionHeader: React.FC<TSectionHeaderProps> = props => {
  const { as = 'div' } = props
  const Component: any = as

  return (
    <Component className={styles.sectionHeader}>{props.children}</Component>
  )
}

export default SectionHeader
