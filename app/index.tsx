import { ActivityIndicator, Text, View } from 'react-native'
import { white } from 'tailwindcss/colors'

import { useFonts } from '../hooks/use-fonts'

export default function Redirect() {
  const isLoaded = useFonts()

  if (!isLoaded) {
    return <ActivityIndicator size="small" color={white} />
  }

  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text>This is a Expo Router with Tailwindcss</Text>
    </View>
  )
}
