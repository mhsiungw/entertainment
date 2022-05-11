/** @jsxImportSource @emotion/react */
import { ReactComponent as SearchIcon } from '../../assets/icon/icon-search.svg'
import { useTheme } from '@emotion/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const [value, setValue] = useState('')
  const { colors } = useTheme()
  const navigate = useNavigate()
  const style = {
    minHeight: '100%',
    width: '100%',
    backgroundColor: colors.black,
    color: colors.white,
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!value) return
        localStorage.setItem('searchTerm', value)
        navigate('/search')
      }}
      css={{ display: 'flex', gap: '2rem' }}
    >
      <SearchIcon css={{ transform: 'scale(0.9)' }} />
      <input
        onChange={(e) => {
          setValue(e.target.value)
        }}
        css={style}
        value={value}
        type="text"
        placeholder="Search from movies or TV series"
      />
    </form>
  )
}

export default Index
