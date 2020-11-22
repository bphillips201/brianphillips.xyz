import React, { AllHTMLAttributes } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import * as styles from './ActionLink.module.scss'
import Chevron from './Chevron'

type TActionLinkProps = AllHTMLAttributes<HTMLElement> & {
  to: string
  external?: boolean
  arrow?: 'left' | 'right' | 'none'
}

const ActionLink: React.FC<TActionLinkProps> = props => {
  const {
    to,
    children,
    external = false,
    arrow = 'none',
    className = '',
    ...rest
  } = props
  const actionLinkClasses = classnames({
    [styles.actionLink]: true,
    [className]: className,
  })

  return (
    <>
      {external ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={actionLinkClasses}
          {...rest}
        >
          {children} <Chevron direction={'right'} />
        </a>
      ) : (
        <Link to={to} className={actionLinkClasses} {...rest}>
          {arrow === 'left' && <Chevron direction={arrow} />}
          {children}
          {arrow === 'right' && <Chevron direction={arrow} />}
        </Link>
      )}
    </>
  )
}

export default ActionLink
