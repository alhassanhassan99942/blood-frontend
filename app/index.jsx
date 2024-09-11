import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { icons } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          
          <View className="">
            <Text className="font-opensemibold text-4xl mt-3 text-secondary ">
              Blood
            </Text>
          </View>
          <Image
            // source={images.red_hearth}
            source={icons.blood}
            className="mt-5 max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-black font-openbold text-center">
              Be a Hero By Making a gift{" "}
              <Text className="text-secondary ">Blood</Text>
            </Text>
          </View>

          <Text
            className={`text-sm font-openregular text-black mt-7 text-center`}
          >
            Where creativity meets innovation: embark on a journey of limitless
            exploration with aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in") }
            containerStyles="text-gray-100 w-full mt-7 "
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </SafeAreaView>
  );
}

