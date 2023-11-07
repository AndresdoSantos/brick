import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { blue, zinc } from 'tailwindcss/colors'

import ArrowRight from '../../assets/svg/arrow-right.svg'

export default function Content() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="py-14 flex-1"
    >
      <View className="flex-row items-center justify-between border-b border-b-zinc-800 px-5 pb-5">
        <Text className="text-sm text-white font-400">Create a new story</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={20}
          className="flex-row items-center"
        >
          <Text className="text-[13px] text-blue-500 font-400">
            {`that's what happened`}
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        className="rounded mt-5 text-white font-400 text-[13px] px-5"
        placeholder="Say what you want..."
        placeholderTextColor={zinc[500]}
        multiline
        numberOfLines={50}
      />
    </KeyboardAvoidingView>
  )
}
