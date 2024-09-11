import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[86vh]  px-4 my-6 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px] "
          />
          <Text className="text-2xl text-black text-semibold mt-10 font-opensemibold">
            Log in to the app
          </Text>
          <FormField
            title="Email"
            otherStyles="mt-7"
            keyboardType="email-adress"
          />
          <FormField
            title="Password"
            otherStyles="mt-7"
            keyboardType="email-adress"
          />
          <CustomButton
            title="Sign In"
            // handlePress={}
            containerStyles="mt-7"
            // isLoading={null}
          />
          <View className="justify-center p-5 flex-row gap-2">
            <Link href="/home" className="text-lg text-accent font-openregular">
              Don't have an account
            </Link>
            <Link
              href="/sign-up"
              className="text-lg text-secondary font-opensemibold"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
