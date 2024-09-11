import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '../../constants'

const Notification = () => {
  return (
    <SafeAreaView>
     
     <View className='flex flex-row my-10 p-5 items-center'>
        <Image source={icons.blood_drop} className='w-7 h-10' />
        <Text className='font-psemibold text-xl mx-4'>Notification</Text>
      </View>

      <View className='flex items-center justify-center mt-[60%]'>
        <Text className='text-sm font-pregular'>You have no notification fot the moment </Text>
      </View>
    
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({})