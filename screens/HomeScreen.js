import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native'

function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
}, [])

  return (
    <SafeAreaView>
      <Text className="text-blue-500">Hi</Text>

      <View>
        <Image
        source={{uri:'https://links.papareact.com/wru',}}
        className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
      </View>
    </SafeAreaView>
  ); 
};
 
export default HomeScreen;
