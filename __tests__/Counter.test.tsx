import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '@/components/Counter'

describe('Counter (component integration)', () => {
  it('renders the initial value', () => {
    render(<Counter initial={5} />)
    expect(screen.getByTestId('count')).toHaveTextContent('5')
  })

  it('increments and decrements', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.click(screen.getByLabelText('increment'))
    await user.click(screen.getByLabelText('increment'))
    expect(screen.getByTestId('count')).toHaveTextContent('2')

    await user.click(screen.getByLabelText('decrement'))
    expect(screen.getByTestId('count')).toHaveTextContent('1')
  })

  it('resets to the initial value', async () => {
    const user = userEvent.setup()
    render(<Counter initial={3} />)

    await user.click(screen.getByLabelText('increment'))
    expect(screen.getByTestId('count')).toHaveTextContent('4')

    await user.click(screen.getByLabelText('reset'))
    expect(screen.getByTestId('count')).toHaveTextContent('3')
  })
})
