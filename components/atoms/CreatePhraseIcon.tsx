import Link from 'next/link'

const CreatePhraseIcon: React.VFC = () => {
  return (
    <Link href="/" passHref>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-white hover:text-gray-500 h-6 w-6 md:h-8 md:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    </Link>
  )
}

export default CreatePhraseIcon
