/* eslint-disable camelcase */
import {
  useFonts as useInterFont,
  Inter_400Regular,
  Inter_300Light,
} from '@expo-google-fonts/inter'

export function useFonts() {
  const [isLoaded] = useInterFont({
    Inter_400Regular,
    Inter_300Light,
  })

  return isLoaded
}
