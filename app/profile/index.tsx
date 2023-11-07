import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Profile() {
  return (
    <View className="pt-[104px] flex-1">
      <Link asChild href="/">
        <TouchableOpacity
          activeOpacity={0.8}
          className="items-center space-y-3"
        >
          <View className="h-[64px] w-[64px] rounded-[20px] bg-zinc-800" />
          <Text className="text-white text-xs font-400">Olá, andres</Text>
        </TouchableOpacity>
      </Link>

      <View className="mt-10 w-full px-10">
        <Link asChild href="/login/">
          <TouchableOpacity
            activeOpacity={0.8}
            className="items-start space-y-3"
          >
            <Text className="text-red-500 text-xs font-400">SAIR</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}
