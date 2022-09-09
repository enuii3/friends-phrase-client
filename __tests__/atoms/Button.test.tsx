import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Button from '../../components/atoms/Button'

describe('Button Component Test', () => {
  it('Should render test button text', async () => {
    const testButtonText = 'test button text'
    render(<Button text={testButtonText} />)

    expect(screen.getByText(testButtonText)).toBeInTheDocument()
  })
})
