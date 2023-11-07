import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

import Plus from '../assets/svg/plus.svg'

export default function Redirect() {
  return (
    <View className="py-14 px-6">
      <View className="flex-row items-center justify-between">
        <Link href="/profile/" asChild>
          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row items-center space-x-3"
          >
            <View className="h-8 w-8 rounded-[10px] bg-zinc-800" />
            <Text className="text-white text-xs font-400">Olá, andres</Text>
          </TouchableOpacity>
        </Link>

        <Link asChild href="/content/">
          <TouchableOpacity activeOpacity={0.8} hitSlop={20}>
            <Plus />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-11">
        <TouchableOpacity activeOpacity={0.8} className="h-16 mb-10">
          <View className="flex-row items-center justify-between">
            <Text className="text-zinc-400 font-400 text-[11px]">
              Tuesday, 21 may
            </Text>

            <View className="flex-row items-center h-6 bg-zinc-800">
              <TouchableOpacity
                activeOpacity={0.8}
                className="h-6 w-6 bg-zinc-800"
              ></TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                className="h-6 w-6 bg-zinc-800"
              ></TouchableOpacity>
            </View>
          </View>

          <Text className="text-xs text-white font-400 mt-[15px]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the...
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} className="h-16 mb-10">
          <View className="flex-row items-center justify-between">
            <Text className="text-zinc-400 font-400 text-[11px]">
              Tuesday, 22 may
            </Text>

            <View className="flex-row items-center h-6 bg-zinc-800">
              <TouchableOpacity
                activeOpacity={0.8}
                className="h-6 w-6 bg-zinc-800"
              ></TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                className="h-6 w-6 bg-zinc-800"
              ></TouchableOpacity>
            </View>
          </View>

          <Text className="text-xs text-white font-400 mt-[15px]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
