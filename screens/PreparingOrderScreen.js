import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000);
    }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image 
      source={require('../assets/waiting.gif')}
      animation='slideInUp'
      iterationCount={1}
      className='h-3/5 w-4/5 rounded-full'
    />

    <Animatable.Text
        animation='slideInUp'
        iterationCount={1} 
        className='text-md my-10 text-white font-extrabold text-center'
    >
        Your order is being transmitted through the internet!
    </Animatable.Text>

    <Progress.Pie size={70} indeterminate={true} color='purple' />

    </SafeAreaView> 
  )
}

export default PreparingOrderScreen