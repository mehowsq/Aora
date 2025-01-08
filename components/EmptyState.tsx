import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
}

import { images } from "@/constants";

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-gray-100 text-xl font-pmedium mt-2">{title}</Text>
      <Text className="text-gray-100 text-sm font-pmedium">{subtitle}</Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
