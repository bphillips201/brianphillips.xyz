import React, { AllHTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'
import * as styles from './Wrapper.module.scss'

type WrapperProps = AllHTMLAttributes<HTMLElement> & {
  color?: 'white' | 'gray'
  width?: 'full' | 'wrap' | 'content' | 'thin'
  noPadX?: boolean
  bigY?: boolean
  as?: ReactNode
  align?: 'left' | 'right' | 'center'
}

const Wrapper: React.FC<WrapperProps> = props => {
  const {
    children,
    className = '',
    color = 'white',
    noPadX = false,
    bigY = false,
    width = 'wrap',
    align = 'left',
    as = 'section',
    ...rest
  } = props
  const Component: any = as
  const chunkClasses = classnames({
    [styles.chunk]: true,
    [styles[color]]: true,
    [styles[align]]: true,
  })
  const wrapperClasses = classnames({
    [styles.wrapper]: true,
    [styles.noPadX]: noPadX,
    [styles.bigY]: bigY,
    [styles[width]]: true,
    [className]: className,
  })

  return (
    <Component {...rest} className={chunkClasses}>
      <div className={wrapperClasses}>{children}</div>
    </Component>
  )
}

export default Wrapper
