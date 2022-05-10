/** @jsxImportSource @emotion/react */
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Icon = ({ children: IconSVG, route }) => {
  return (
    <Fragment>
      <li>
        <Link to={route}>
          <IconSVG css={{ cursor: 'pointer' }} />
        </Link>
      </li>
    </Fragment>
  )
}

export default Icon
