/** @jsxImportSource @emotion/react */
import { ReactComponent as BookMark } from '../assets/icon/icon-bookmark-empty.svg'
import { useTheme } from '@emotion/react'
import { useState, useEffect } from 'react'
import dummyData from 'assets/data'

const Bookmark = ({ isBookMarked: _isBookMarked, setData, setUpdate }) => {
  const { colors } = useTheme()
  const [isBookMarked, setBookMark] = useState(_isBookMarked)

  useEffect(() => {
    ;(async () => {
      console.log('useEffect', _isBookMarked)
      await setBookMark(_isBookMarked)
      console.log('useEffect', _isBookMarked)
    })()
  }, [_isBookMarked])

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
    let storageValue = JSON.parse(localStorage.getItem(key))
    let stringifyValue = JSON.stringify([value])
    if (storageValue) {
      stringifyValue = JSON.stringify([...storageValue, value])
    }
    localStorage.setItem(key, stringifyValue)
  }

  const deleteLocalStorage = (key, value) => {
    let storageValue = JSON.parse(localStorage.getItem(key))
    let filteredStorageValue = storageValue.filter((v) => v.name !== value)
    let stringifyValue = JSON.stringify(filteredStorageValue)
    localStorage.setItem(key, stringifyValue)
    // delete bookmark immediately
    if (setData) {
      setData(filteredStorageValue)
    }
  }

  const toggleBookMark = (e) => {
    let movie = e.target.closest('.bookmark__container').dataset.movie
    if (!isBookMarked) {
      let movieData = dummyData.find((d) => d.name === movie)
      addLocalStorage('movies', movieData)
      setBookMark(true)
      setUpdate({})
    } else {
      setBookMark(false)
      deleteLocalStorage('movies', movie)
      setUpdate({})
    }
  }

  return (
    <span onClick={toggleBookMark} css={BookMarkStyle}>
      <BookMark css={isBookMarked ? { path: { fill: 'white' } } : {}} />
    </span>
  )
}

export default Bookmark
