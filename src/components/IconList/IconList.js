/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const IconList = ({ children }) => {
  return <ul css={{ display: 'flex', alignItems: 'center', gap: '2.4rem' }}>{children}</ul>
}

export default IconList
