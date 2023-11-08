import { render } from '@testing-library/react-native'

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

    /** const onPressMock = jest.fn()

    fireEvent.press(button)

    expect(onPressMock).toHaveBeenCalled() */
  })

  /** it('should render and change text correctly', () => {
    const { getByText } = render(<Content />)

    const button = getByText(`that's what happened`)

    expect(button).toBeDefined()

    /** const onPressMock = jest.fn()

    fireEvent.press(button)

    expect(onPressMock).toHaveBeenCalled()
  }) */
})
