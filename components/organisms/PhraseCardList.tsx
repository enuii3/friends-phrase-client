import { Phrases } from '../../types/types'
import PhraseCard from '../molecules/PhraseCard'

const PhraseCardList: React.VFC<Phrases> = ({ phrases }) => {
  return (
    <ul className="w-full">
      {phrases &&
        phrases.map((phrase) => (
          <li key={phrase.id}>
            <PhraseCard phrase={phrase} />
          </li>
        ))}
    </ul>
  )
}

export default PhraseCardList
