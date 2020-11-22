import React, { AllHTMLAttributes } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import * as styles from './ActionLink.module.scss'
import Chevron from './Chevron'

type TActionLinkProps = AllHTMLAttributes<HTMLElement> & {
  to: string
  text: string
  arrow?: 'left' | 'right' | 'none'
}

const ActionLink: React.FC<TActionLinkProps> = props => {
  const { to, text, arrow = 'right', className = '', ...rest } = props
  const actionLinkClasses = classnames({
    [styles.actionLink]: true,
    [className]: className,
  })
  const isExternal = to.includes('http')

  return (
    <>
      {isExternal ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={actionLinkClasses}
          {...rest}
        >
          {arrow === 'left' && <Chevron direction={arrow} />}
          {text}
          {arrow === 'right' && <Chevron direction={arrow} />}
        </a>
      ) : (
        <Link to={to} className={actionLinkClasses} {...rest}>
          {arrow === 'left' && <Chevron direction={arrow} />}
          {text}
          {arrow === 'right' && <Chevron direction={arrow} />}
        </Link>
      )}
    </>
  )
}

export default ActionLink
