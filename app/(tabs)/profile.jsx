import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { icons } from "../../constants";
import colors from "../../constants/colors";
import images from "../../constants/images";
import { FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const data = [
  {
    icon: icons.key,
    text: "My Account ",
  },
  {
    icon: icons.lock,
    text: "Privacy",
  },
  {
    icon: icons.notification,
    text: "Notifications",
  },
  {
    icon: icons.setting,
    text: "Settings",
  },
  {
    icon: icons.share,
    text: "Share The app",
  },
  {
    icon: icons.idea,
    text: "Help",
  },
];

const Item = ({ item }) => (
  <TouchableOpacity className="flex flex-row items-center p-5">
    <Image source={item.icon} className="w-8 h-8" />
    <Text className="text-xl mx-3 font-psemibold ">{item.text}</Text>
  </TouchableOpacity>
);

const Profile = () => {
  return (
    <View>
      <SafeAreaView className="my-10">
      <ScrollView>
        <View className="flex flex-row items-center justify-between ">
          <View className="flex flex-row items-center mx-3">
            <Image className="w-9 h-11 " source={icons.blood_drop} />
            <Text className="ml-1.5 font-psemibold text-lg">Profile</Text>
          </View>
          <View className="px-4">
            {/* <Image
              source={icons.logout}
              style={{ tintColor: colors.accent }}
              className="w-8 h-7 mr-5"
            /> */}
            <Ionicons
              name="log-out-outline"
              size={25}
              color="black"
              className="p-2"
            />
          </View>
        </View>
        <View className="my-5 w-full border border-gray-100 flex flex-row items-center justify-between p-4">
          <View className="flex flex-row items-center">
            <Image source={images.profile} className="w-20 h-20 rounded-full" />
            <View>
              <Text className="mx-2 font-psemibold text-lg">Username</Text>
              <Text className="mx-1 text-xs font-plight">
                Alhasanben42@gmail.com
              </Text>
            </View>
          </View>
          <TouchableOpacity className="bg-secondary-100 h-10 w-20 items-center justify-center font rounded-lg ">
            <Text className="text-primary">Modify</Text>
          </TouchableOpacity>
        </View>

        
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />

          <View className="flex flex-row p-5 items-center justify-around">
            <TouchableOpacity>
              <Ionicons name="logo-instagram" size={38} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="logo-facebook" size={38} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="logo-twitter" size={38} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="logo-linkedin" size={38} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
