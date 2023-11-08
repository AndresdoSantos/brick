import { render } from '@testing-library/react-native'

import { mockUseRouter } from '../../@test-utils/mock-use-router'

import Login from 'app/login'

describe('login', () => {
  it('should render the title correctly', () => {
    mockUseRouter()

    const { getByText } = render(<Login />)

    expect(getByText('BRICK')).toBeDefined()
  })
})
