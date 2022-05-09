/** @jsxImportSource @emotion/react */
import IconList from '../components/IconList'
import Avatar from '../components/Avatar'
import Logo from '../components/Logo'
import { useTheme } from '@emotion/react'

const Header = () => {
  const { colors } = useTheme()

  const style = {
    backgroundColor: colors.darkBlue,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 2rem',
  }

  return (
    <header css={style}>
      <Logo />
      <IconList />
      <Avatar />
    </header>
  )
}

export default Header
