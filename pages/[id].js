import PropTypes from 'prop-types'
import Error from 'next/error'
import Head from 'next/head'
import { OompaLoompaClient } from '../services/oompa-loompa'
import { Header } from '../components/header'
import { OompaLoompaDetail } from '../components/oompa-loompa-detail'

export default function Detail ({ initialData, errorCode }) {
  if (errorCode) return <Error statusCode={errorCode} />
  return (
    <>
      <Head>
        <title>{initialData.first_name} {initialData.last_name}</title>
      </Head>
      <Header />
      {initialData &&
      <OompaLoompaDetail
        image={initialData.image}
        firstName={initialData.first_name}
        lastName={initialData.last_name}
        profession={initialData.profession}
        gender={initialData.gender}
        description={initialData.description}
      />}
    </>
  )
}

export async function getServerSideProps ({ params }) {
  const client = new OompaLoompaClient({ useCache: false })
  const response = await client.getById(params.id)
  const errorCode = response.image ? 0 : 404
  const initialData = response.image ? response : null

  res.setHeader('Cache-control', 's-maxage=300, stale-while-revalidate')

  return {
    props: {
      initialData,
      errorCode
    }
  }
}

Detail.propTypes = {
  initialData: PropTypes.object,
  errorCode: PropTypes.number
}
