import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import { styled } from 'nativewind';
import { icons } from "../constants";
interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View className="px-4 bg-gray-800 flex-row items-center justify-between rounded-lg m-6">
      <TextInput
        className="h-12 w-72 font-pbold text-white"
        placeholder="Find aircraft..."
        placeholderTextColor={'#fff'}
        value={searchText}
        onChangeText={handleSearch}
      />
      <Image source={icons.search} resizeMode="contain" style={{ width: 20, height: 20 }} />
    </View>
  );
};

export default SearchBar;
