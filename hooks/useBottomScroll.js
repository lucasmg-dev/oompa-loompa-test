import { useState, useEffect } from 'react'

export const useBottomPage = ({ offset = 0 } = {}) => {
  const [isBottom, setIsBottom] = useState(false)

  const handleScroll = () => {
    const isBottomPage = window.innerHeight + document.documentElement.scrollTop + offset >=
      document.documentElement.offsetHeight
    setIsBottom(isBottomPage)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isBottom
}
