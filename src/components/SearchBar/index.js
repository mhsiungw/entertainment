/** @jsxImportSource @emotion/react */
import { ReactComponent as SearchIcon } from '../../assets/icon/icon-search.svg'
import { useTheme } from '@emotion/react'

const Index = () => {
  const { colors } = useTheme()
  const style = {
    minHeight: '100%',
    width: '100%',
    backgroundColor: colors.black,
    color: colors.white,
  }

  return (
    <form css={{ display: 'flex', gap: '2rem' }}>
      <SearchIcon css={{ transform: 'scale(0.9)' }} />
      <input css={style} type="text" placeholder="Search from movies or TV series" />
    </form>
  )
}

export default Index
