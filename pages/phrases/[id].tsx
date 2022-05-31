import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPhraseIds, getPhraseData } from '../../lib/fetch'
import Layout from '../../components/templates/Layout'
import { Phrase } from '../../types/types'
import PhraseCard from '../../components/molecules/PhraseCard'
import CardCase from '../../components/atoms/CardCase'
import { useRouter } from 'next/router'

const PhraseDetail: React.VFC<{ phrase: Phrase }> = ({ phrase }) => {
  const router = useRouter()
  if (router.isFallback || !phrase) {
    return <div>Loading...</div>
  }
  return (
    <Layout title="phrase detail">
      <CardCase hover={false}>
        <PhraseCard phrase={phrase} />
      </CardCase>
    </Layout>
  )
}
export default PhraseDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPhraseIds()
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const phrase = await getPhraseData(ctx.params.id as string)
  return {
    props: { phrase },
    revalidate: 1,
  }
}
