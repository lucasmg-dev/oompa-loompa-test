import Head from 'next/head'
import PropTypes from 'prop-types'
import { Header } from '../components/header'
import { SearchForm } from '../components/search-form'
import { HomeTitle } from '../components/home-title'
import { OompaLoompaClient } from '../services/oompa-loompa'
import { useOompaLoompas } from '../hooks/useOompaLoompas'
import { GridOompaLoompas } from '../components/grid-oompa-loompas'

export default function Home ({ initialOompaLoompas = [] }) {
  const oompaLoompas = useOompaLoompas(initialOompaLoompas)
  return (
    <>
      <Head>
        <title>Oompa Loompa&apos;s Crew</title>
      </Head>
      <Header />
      <SearchForm handleFilter={() => {}} />
      <HomeTitle />
      <GridOompaLoompas data={oompaLoompas}/>
    </>
  )
}

export async function getServerSideProps (_ctx) {
  const client = new OompaLoompaClient()
  const initialOompaLoompas = await client.find()
  return { props: { initialOompaLoompas } }
}

Home.propTypes = {
  initialOompaLoompas: PropTypes.object
}
