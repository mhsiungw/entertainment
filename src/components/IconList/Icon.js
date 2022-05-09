/** @jsxImportSource @emotion/react */
import React from 'react'
import { Fragment } from 'react'

const Icon = (props) => {
  const IconSVG = props.children
  return (
    <Fragment>
      <li>
        <IconSVG css={{ cursor: 'pointer' }} />
      </li>
    </Fragment>
  )
}

export default Icon
