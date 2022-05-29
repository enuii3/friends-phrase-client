import { Phrases } from '../../types/types'
import PhraseCard from '../molecules/PhraseCard'
import CardCase from '../atoms/CardCase'
import Link from 'next/link'

const PhraseCardList: React.VFC<Phrases> = ({ phrases }) => {
  return (
    <ul className="w-full">
      {phrases &&
        phrases.map((phrase) => (
          <li key={phrase.id}>
            <Link href={`/phrases/${phrase.id}`}>
              <a>
                <CardCase hover={true}>
                  <PhraseCard phrase={phrase} />
                </CardCase>
              </a>
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default PhraseCardList
