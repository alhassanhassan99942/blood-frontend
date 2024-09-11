import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'
import colors from '../../constants/colors'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular' } text-xs` } style={{color: color}}>{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
   <>
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.secondary,
            tabBarInactiveTintColor: colors.accent,
           tabBarStyle: {
            backgroundColor: colors.background,
            borderTopWidth: 1,
            borderTopColor: colors.background,
            height: 70, 
           }
        }}
    >
        <Tabs.Screen
            name='home'
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon 
                        icon={icons.home}
                        color={color}
                        name='Home'
                        focused={focused}
                    />
                )

            }}
        />

        <Tabs.Screen
            name='notification'
            options={{
                title: 'notification',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon 
                        icon={icons.notification}
                        color={color}
                        name='Notification'
                        focused={focused}
                    />
                )

            }}
        />
        <Tabs.Screen
            name='donation'
            options={{
                title: 'donation',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon 
                        icon={icons.help}
                        color={color}
                        name='Donate'
                        focused={focused}
                    />
                )

            }}
        />

        <Tabs.Screen
            name='profile'
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon 
                        icon={icons.profile}
                        color={color}
                        name='Profile'
                        focused={focused}
                    />
                )

            }}
        />
        
    </Tabs>
   </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})