import { Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import { images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full px-4">
      {/* contentContainerStyle={{ height: "100%" }} */}
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85v] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5 px-4">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[86px] h-[15px] absolute -bottom-4 -right-1"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-16 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
        </View>
        <CustomButton
          title="Continue with Email"
          handlePress={() => router.push("/sign-in")}
          containerStyles={"w-full mt-10"}
        />
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
