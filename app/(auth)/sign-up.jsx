import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'



const SignUp  = () => {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false);


    const submit = async () => {

        if (form.username === "" || form.email === '' || form.password === ''){
            Alert.alert("Error", 'please fill all the fields ')
        }

        setIsSubmitting(true)
        try {
            const result = await createUser(form.email, form.password, form.username)
            setUser(result)
            setIsLogged(true)
            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message)
        }finally{
            setIsSubmitting(false)
        }
        
    }

  return (
    <SafeAreaView className='bg-primary h-full'>
        <ScrollView>
            <View className='w-full justify-center min-h-[70vh]  px-4 my-6 '>
            <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px] '/>
            <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Sign Up to the app</Text>
            <FormField 
                title = 'Username'
                value={form.username}
                handleChangeText = { (e) => setForm({...form, username: e})}
                otherStyles='mt-10'
                
                
            />
            <FormField 
                title = 'Email'
                value={form.email}
                handleChangeText = { (e) => setForm({...form, email: e})}
                otherStyles='mt-7'
                keyboardType= 'email-adress'
                
            />
            <FormField 
                title = 'Password'
                value={form.password}
                handleChangeText = {(e) => setForm({...form, password: e})}
                otherStyles='mt-7'
                keyboardType= 'email-adress'

            />
            <CustomButton 
                title='Sign Up'
                handlePress={submit}
                containerStyles='mt-7'
                isLoading={isSubmitting}
            />
            <View className='justify-center p-5 flex-row gap-2'>
                <Link href='/home' className='text-lg text-accent font-pregular'>Already have an account </Link>
                <Link href='/sign-in' className='text-lg text-secondary font-semibold text'>Sign In</Link>
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})