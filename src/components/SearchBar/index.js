/** @jsxImportSource @emotion/react */
import { ReactComponent as SearchIcon } from '../../assets/icon/icon-search.svg'
import { useTheme } from '@emotion/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const [value, setValue] = useState('')
  const { useMedia, colors } = useTheme()
  const navigate = useNavigate()
  const mq = useMedia()

  const inputStyle = {
    minHeight: '100%',
    width: '100%',
    backgroundColor: colors.black,
    color: colors.white,
    fontSize: '1.6rem',
    [mq[1]]: {
      fontSize: '2.4rem',
    },
    letterSpacing: '1px',
    fontWeight: 300,
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!value) return
        localStorage.setItem('searchTerm', value)
        navigate('/search')
      }}
      css={{
        display: 'flex',
        gap: '2rem',
        marginLeft: '1rem',
        [mq[1]]: { marginLeft: '1.5rem' },
      }}
    >
      <SearchIcon css={{ transform: 'scale(0.9)' }} />
      <input
        onChange={(e) => {
          setValue(e.target.value)
        }}
        css={inputStyle}
        value={value}
        type="text"
        placeholder="Search from movies or TV series"
      />
    </form>
  )
}

export default Index
