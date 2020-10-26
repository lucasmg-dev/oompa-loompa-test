import Head from 'next/head'
import PropTypes from 'prop-types'
import { Header } from '../components/header'
import { SearchForm } from '../components/search-form'
import { HomeTitle } from '../components/home-title'
import { OompaLoompaClient } from '../services/oompa-loompa'
import { useOompaLoompas } from '../hooks/useOompaLoompas'
import { GridOompaLoompas } from '../components/grid-oompa-loompas'
import { useBottomPage } from '../hooks/useBottomScroll'

export default function Home ({ initialData = [] }) {
  const isBottomPage = useBottomPage({ offset: 100 })
  const { data: oompaLoompas, setKeyword, keyword } = useOompaLoompas({ initialData, isBottomPage })

  const handleFilter = value => {
    if (value !== keyword) setKeyword(value)
  }

  return (
    <>
      <Head>
        <title>Oompa Loompa&apos;s Crew</title>
        <meta
          name='description'
          content='The application will serve as a tool to help the company’s Human Resources department' />
      </Head>
      <Header />
      <SearchForm handleFilter={handleFilter} />
      <HomeTitle />
      <GridOompaLoompas data={oompaLoompas}/>
    </>
  )
}

export async function getServerSideProps ({ res }) {
  const client = new OompaLoompaClient({ useCache: false })
  const response = await client.find()
  res.setHeader('Cache-control', 's-maxage=300, stale-while-revalidate')
  return { props: { initialData: response.results || [] } }
}

Home.propTypes = {
  initialData: PropTypes.array
}
