import { useState, useEffect } from 'react'
import { OompaLoompaClient } from '../services/oompa-loompa'

export const useOompaLoompas = initialData => {
  const [data, setData] = useState(initialData)

  const fetchData = async () => {
    console.log('FETCH OOMPA LOOMPAS')
    const client = new OompaLoompaClient()
    const response = await client.find()
    setData(response)
  }

  useEffect(() => {
    if (!data.results) fetchData()
  }, [])

  return data
}
