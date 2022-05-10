/** @jsxImportSource @emotion/react */
import { ReactComponent as BookMark } from '../assets/icon/icon-bookmark-empty.svg'
import { useTheme } from '@emotion/react'
import dummyData from 'data'

const Bookmark = () => {
  const { colors } = useTheme()

  const BookMarkStyle = {
    position: 'absolute',
    right: '.8rem',
    top: '.8rem',
    width: '32px',
    height: '32px',
    backgroundColor: colors.black,
    opacity: '0.5',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  const addLocalStorage = (key, value) => {
    let StorageValue = JSON.parse(localStorage.getItem(key))
    let StringifyValue = JSON.stringify([value])
    if (StorageValue) {
      StringifyValue = JSON.stringify([...StorageValue, value])
    }
    localStorage.setItem(key, StringifyValue)
  }

  const toggleBookMark = (e) => {
    let movie = e.target.closest('.bookmark__container').dataset.movie
    let movieData = dummyData.find((d) => d.name === movie)
    addLocalStorage('movies', movieData)
  }

  return (
    <span onClick={toggleBookMark} css={BookMarkStyle}>
      <BookMark css={{ path: { fill: 'white' } }} />
    </span>
  )
}

export default Bookmark
