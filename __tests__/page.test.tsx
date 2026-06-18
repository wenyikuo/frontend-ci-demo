import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Frontend CI Demo')
  })

  it('renders the counter starting at 0', () => {
    render(<Home />)
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })
})
