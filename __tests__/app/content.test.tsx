import { fireEvent, render } from '@testing-library/react-native'

import Content from 'app/content'

describe('content screen', () => {
  it('should render text on the screen', () => {
    const { getByText } = render(<Content />)

    expect(getByText('Create a new story')).toBeTruthy()
  })

  it('should render button on the screen', () => {
    const { getByText } = render(<Content />)

    const button = getByText(`that's what happened`)

    expect(button).toBeDefined()
  })

  it('should render and change text correctly', () => {
    const { getByTestId } = render(<Content />)

    const input = getByTestId('content-input')

    expect(input).toBeDefined()
    expect(input.props.multiline).toBe(true)
    expect(input.props.numberOfLines).toBe(50)
    expect(input.props.placeholder).toBe('Say what you want...')

    fireEvent.changeText(input, 'Hello')

    expect(input.props.value).toBe('Hello')
  })
})
