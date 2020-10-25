import { useState, useEffect, useRef } from 'react'
import { OompaLoompaClient } from '../services/oompa-loompa'

const INITIAL_PAGE = 1

export const useOompaLoompas = ({ initialData, isBottomPage } = {}) => {
  const [data, setData] = useState(initialData)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [filtered, setFiltered] = useState(false)
  const [keyword, setKeyword] = useState('')
  const originalData = useRef(initialData)

  const totalPages = useRef(initialData.total || null)

  const fetchData = async (options) => {
    try {
      const client = new OompaLoompaClient()
      const response = await client.find(options)
      totalPages.current = response.total
      return response.results
    } catch (err) {
      console.error('fetch failed', err)
      return []
    }
  }

  useEffect(() => {
    if (!data) {
      fetchData().then(setData)
    }
  }, [])

  useEffect(() => {
    if (!filtered) originalData.current = data
  }, [data])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    fetchData({ page })
      .then(nextData => {
        setData(prevData => prevData.concat(nextData))
      })
  }, [page])

  useEffect(() => {
    if (!keyword) {
      if (filtered) {
        setData(originalData.current)
        setFiltered(false)
      }
      return
    }
    setFiltered(true)
    const filteredData = originalData.current.filter(loompa => {
      const toFilter = `${loompa.first_name} ${loompa.last_name} ${loompa.profession}`.toLowerCase()
      return toFilter.indexOf(keyword.toLowerCase()) > -1
    })
    setData(filteredData)
  }, [keyword])

  useEffect(() => {
    if (page === totalPages.current) return

    if (isBottomPage && !filtered) {
      setPage(page + 1)
    }
  }, [isBottomPage])

  return { data, page, setPage, setKeyword, keyword }
}
