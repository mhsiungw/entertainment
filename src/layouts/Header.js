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
    [mq[2]]: {
      flexDirection: 'column',
      height: 'calc(100vh - 6.4rem)',
      position: 'sticky',
      top: 0,
      margin: '3.2rem',
      borderRadius: '8px',
      flexBasis: '96px',
      alignItems: 'center',
    },
  }

  return (
    <header css={style}>
      <Logo />
      <IconList />
      <Avatar img="http://cdn.shopify.com/s/files/1/1566/2889/articles/PORTADA-TC.jpg?v=1625573349" />
    </header>
  )
}

export default Header
