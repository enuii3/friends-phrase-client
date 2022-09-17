import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import LanguageTextLine from '../../components/molecules/LanguageTextLine'
import { TextLanguageCode } from '../../types/types'

describe('LanguageTextLine Components test', () => {
  const textLanguageCode: TextLanguageCode = {
    text: 'test text language code',
    languageCode: 'en',
  }

  it('Should render', async () => {
    render(<LanguageTextLine {...textLanguageCode} />)

    expect(screen.getByText(textLanguageCode.text)).toBeInTheDocument()
    expect(
      screen.getByAltText(textLanguageCode.languageCode)
    ).toBeInTheDocument()
    screen.debug()
  })
})
