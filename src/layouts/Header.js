/** @jsxImportSource @emotion/react */
import IconList from '../components/IconList'
import Avatar from '../components/Avatar'
import Logo from '../components/Logo'
import { useTheme } from '@emotion/react'

const Header = () => {
  const { useMedia, colors } = useTheme()
  const mq = useMedia()

  const style = {
    backgroundColor: colors.darkBlue,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 2rem',
    [mq[1]]: {
      flexDirection: 'column',
      maxHeight: '100vh',
      position: 'sticky',
      top: 0,
    },
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
