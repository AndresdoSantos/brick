import { renderHook, waitFor } from '@testing-library/react-native'

import { useFonts } from 'hooks/use-fonts'

describe('use-fonts', () => {
  it('must return a true value', async () => {
    const { result } = renderHook(useFonts)

    await waitFor(() => {
      expect(result).toBeTruthy()
    })
  })
})
