import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPhraseIds, getPhraseData, getCommentData } from '../../lib/fetch'
import Layout from '../../components/templates/Layout'
import { Phrase, Comment } from '../../types/types'
import PhraseCard from '../../components/organisms/PhraseCard'
import PhraseCardCase from '../../components/atoms/PhraseCardCase'
import axios from 'axios'
import useSWR from 'swr'

const axiosPhraseFetcher = async (id: string) => {
  const result = await axios.get<Phrase>(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/phrases/${id}/`
  )
  return result.data
}

const axiosCommentsFetcher = async (phraseId: string) => {
  const res = await axios.get<Comment[]>(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/comments/`
  )
  const comments = res.data
  return comments.filter((comment) => comment.phrase === phraseId)
}

interface StaticProps {
  staticPhrase: Phrase
  staticComments: Comment[]
}

const PhraseDetail: React.VFC<StaticProps> = ({
  staticPhrase,
  staticComments,
}) => {
  const { data: phrase, error: phraseError } = useSWR(
    staticPhrase ? staticPhrase.id : null,
    axiosPhraseFetcher,
    {
      fallbackData: staticPhrase,
      revalidateOnMount: true,
    }
  )

  const { error: commentsError } = useSWR(
    'commentsFetch',
    axiosCommentsFetcher,
    {
      fallbackData: staticComments,
      revalidateOnMount: true,
    }
  )

  const router = useRouter()
  if (router.isFallback || !phrase) {
    return <div>Loading...</div>
  }
  if (phraseError || commentsError) return <span>Error!</span>

  return (
    <Layout title="phrase detail">
      <PhraseCardCase hover={false}>
        <PhraseCard phrase={staticPhrase} comments={staticComments} />
      </PhraseCardCase>
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
  const staticPhrase = await getPhraseData(ctx.params.id as string)
  const staticComments = await getCommentData(ctx.params.id as string)
  return {
    props: { staticPhrase, staticComments },
    revalidate: 1,
  }
}
