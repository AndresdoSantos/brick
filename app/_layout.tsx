import { Slot } from 'expo-router'
import {
  ActivityIndicator,
  View,
  StatusBar,
  useColorScheme,
} from 'react-native'
import { white } from 'tailwindcss/colors'
import * as SplashScreen from 'expo-splash-screen'

import { useFonts } from 'hooks/use-fonts'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const isLoaded = useFonts()
  const colorScheme = useColorScheme()

  if (!isLoaded) {
    SplashScreen.hideAsync()

    return (
      <View className="flex-1 items-center justify-center bg-zinc-900">
        <ActivityIndicator size="small" color={white} />
      </View>
    )
  }

  return (
    <View className="flex-1 bg-zinc-900">
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'dark-content' : 'light-content'}
      />

      <Slot />
    </View>
  )
}
