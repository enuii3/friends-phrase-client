import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import LanguageIcon from '../../components/atoms/LanguageIcon'

describe('LanguageIcon Components Test', () => {
  it('Should render Language icon en', async () => {
    const en = 'en'
    render(<LanguageIcon languageCode={en} />)

    expect(screen.getByAltText(en)).toBeInTheDocument()
  })
})
