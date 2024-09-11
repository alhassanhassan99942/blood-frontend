import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images, } from '../constants'
import colors from '../constants/colors'

const FormField = ( {title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (


    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-accent font-pmedium'>{title}</Text>

      <View className='w-full h-16 px-4 bg-[#FFFFFF] border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row'>
        <TextInput 
            className='flex-1 text-accent font-semibold text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor={colors.accent}
            onChangeText={handleChangeText}
            secureTextEntry={title==='Password' && !showPassword}
        />
        {title === 'Password' &&(
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField