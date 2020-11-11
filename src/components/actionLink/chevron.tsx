import React from 'react'
import * as styles from './actionLink.module.scss'

type TChevronProps = {
  direction: 'left' | 'right'
}

const Chevron: React.FC<TChevronProps> = props => {
  const { direction } = props

  const transform =
    direction === 'left' ? 'matrix(-1 0 0 1 105 -1)' : 'translate(0 -1)'

  return (
    <svg
      className={styles[direction]}
      height="186"
      viewBox="0 0 105 186"
      width="105"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m11.707 186.343c-2.741 0-5.493-1.044-7.593-3.149-4.194-4.194-4.194-10.981 0-15.175l74.352-74.347-74.352-74.352c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939c-2.093 2.1-4.84 3.15-7.587 3.15z"
        fill="#2275d3"
        transform={transform}
      />
    </svg>
  )
}

export default Chevron
