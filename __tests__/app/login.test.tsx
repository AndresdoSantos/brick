import { render } from '@testing-library/react-native'

import { mockUseRouter } from '../../@test-utils/mock-use-router'

import Login from 'app/login'

describe('login', () => {
  it('should render the title correctly', () => {
    mockUseRouter()

    const { getByText } = render(<Login />)

    expect(getByText('BRICK')).toBeDefined()
  })

  it('should render the inputs', () => {
    mockUseRouter()

    const { getByTestId } = render(<Login />)

    expect(getByTestId('login-password-input')).toBeDefined()
    expect(getByTestId('login-email-input')).toBeDefined()
  })

  it('should render the touchable opacity', () => {
    mockUseRouter()

    const { getByText } = render(<Login />)

    expect(getByText(`Let's start using`)).toBeDefined()
  })

  it('should render the image', () => {
    mockUseRouter()

    const { getByTestId } = render(<Login />)

    expect(getByTestId('login-image-logo')).toBeDefined()
  })
})
