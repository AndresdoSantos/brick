import { ActivityIndicator, Text, View } from 'react-native'
import { white } from 'tailwindcss/colors'

import { useFonts } from 'hooks/use-fonts'

export default function Redirect() {
  const isLoaded = useFonts()

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-zinc-900">
        <ActivityIndicator size="small" color={white} />
      </View>
    )
  }

  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="text-white font-400">
        This is a Expo Router with Tailwindcss
      </Text>
    </View>
  )
}
