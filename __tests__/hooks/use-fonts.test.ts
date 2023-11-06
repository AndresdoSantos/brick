import { renderHook } from '@testing-library/react-native'

import { useFonts } from 'hooks/use-fonts'

describe('use-fonts', () => {
  it('should be return a boolean value', async () => {
    const { result } = renderHook(() => useFonts())

    expect(result).toBeTruthy()
  })
})
