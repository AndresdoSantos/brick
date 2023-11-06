/* eslint-disable camelcase */
import {
  useFonts as useInterFont,
  Inter_400Regular,
} from '@expo-google-fonts/inter'

export function useFonts() {
  const [isLoaded] = useInterFont({
    Inter_400Regular,
  })

  return isLoaded
}
