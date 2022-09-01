import Layout from '../components/templates/Layout'
import { GetStaticProps } from 'next'
import { getAllPhrasesData } from '../lib/fetch'
import { Phrase } from '../types/types'
import PhraseCard from '../components/organisms/PhraseCard'
import PhraseCardCase from '../components/atoms/PhraseCardCase'
import Link from 'next/link'
import axios from 'axios'
import useSWR from 'swr'

const axiosFetcher = async () => {
  const result = await axios.get<Phrase[]>(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/phrases/`
  )
  return result.data
}

interface STATICPROPS {
  staticPhrases: Phrase[]
}

const MainPage: React.VFC<STATICPROPS> = ({ staticPhrases }) => {
  const { data: phrases, error } = useSWR('phrasesFetch', axiosFetcher, {
    fallbackData: staticPhrases,
    revalidateOnMount: true,
  })
  if (error) return <span>Error!</span>

  return (
    <Layout title="FriendsPhrase">
      <ul className="w-full">
        {phrases &&
          phrases.map((phrase) => (
            <li key={phrase.id}>
              <Link href={`/phrases/${phrase.id}`}>
                <a>
                  <PhraseCardCase hover={true}>
                    <PhraseCard phrase={phrase} />
                  </PhraseCardCase>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  )
}
export default MainPage

export const getStaticProps: GetStaticProps = async () => {
  const staticPhrases = await getAllPhrasesData()
  return {
    props: { staticPhrases },
    revalidate: 1,
  }
}
