import { useRouter } from 'expo-router'

jest.mock('expo-router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}))

export function mockUseRouter() {
  return useRouter.mockReturnValue({
    push: jest.fn(),
  })
}
