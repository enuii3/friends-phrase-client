import Link from 'next/link'
import { PencilIcon } from '@heroicons/react/outline'

const CreatePhraseIcon: React.VFC = () => {
  return (
    <Link href="/create_phrase" passHref>
      <PencilIcon
        data-testid="create-phrase-icon"
        className="text-white hover:text-gray-500 h-6 w-6 md:h-8 md:w-8"
      />
    </Link>
  )
}

export default CreatePhraseIcon
