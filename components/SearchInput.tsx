import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

interface SearchInputProps {
  title?: string;
  value?: string;
  placeholder?: string;
  handleChangeText?: (text: string) => void;
  otherStyles?: string;
}

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: SearchInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="relative">
      <TextInput
        className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl text-white font-pregular text-base focus:border-secondary space-x-4"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity className="absolute right-10 top-5">
        <Image
          source={icons.search}
          className="h-5 w-5 absolute"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
