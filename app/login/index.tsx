import { useRouter } from 'expo-router'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { zinc } from 'tailwindcss/colors'

export default function Login() {
  const { push } = useRouter()

  function handleSubmit() {
    push('/')
  }

  return (
    <View className="py-20 px-6 items-center">
      <Text className="text-[16px] -tracking-wider font-400 text-white">
        BRICK
      </Text>

      <Image
        source={require('../../assets/icon.png')}
        alt=""
        className="w-[150px] h-[150px]"
        testID="login-image-logo"
      />

      <View className="mt-10 w-full bg-zinc-800/30 p-5 rounded-md">
        <Text className="text-[15px] -tracking-wider font-400 text-white">
          {`Let's sign in you`}
        </Text>

        <View className="mt-5">
          <TextInput
            className="mb-2 rounded px-2 h-9 w-full bg-zinc-700/30 text-white font-400 text-[13px]"
            placeholder="Email"
            placeholderTextColor={zinc[500]}
            autoCapitalize="none"
            keyboardType="email-address"
            testID="login-email-input"
          />
          <TextInput
            className="mb-2 rounded px-2 h-9 w-full bg-zinc-700/30 text-white font-400 text-[13px]"
            placeholder="Password"
            placeholderTextColor={zinc[500]}
            secureTextEntry
            testID="login-password-input"
          />
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-9 w-full bg-white rounded items-center justify-center"
            onPress={handleSubmit}
          >
            <Text className="text-[13px] font-400 text-zinc-900">
              {`Let's start using`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
