import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPhraseIds, getPhraseData, getCommentData } from '../../lib/fetch'
import Layout from '../../components/templates/Layout'
import { Phrase, Comment } from '../../types/types'
import PhraseCard from '../../components/molecules/PhraseCard'
import CardCase from '../../components/atoms/CardCase'
import { useRouter } from 'next/router'

const PhraseDetail: React.VFC<{ phrase: Phrase; comments: Comment[] }> = ({
  phrase,
  comments,
}) => {
  const router = useRouter()
  if (router.isFallback || !phrase) {
    return <div>Loading...</div>
  }
  return (
    <Layout title="phrase detail">
      <CardCase hover={false}>
        <PhraseCard phrase={phrase} comments={comments} />
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
  const comments = await getCommentData(ctx.params.id as string)
  return {
    props: { phrase, comments },
    revalidate: 1,
  }
}
