import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
 
 const FeaturedRow = ({ id, title, description }) => {
   return (
    <View>
     <View className='mt-4 flex-row items-center justify-between px-4'>
       <Text className='font-bold text-lg'>{title}</Text>
       <ArrowRightIcon />
     </View>
     
     <Text className='text-xs text-gray-500 px-4'>{description}</Text>
     <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
    >

        <RestaurantCard
        id='123'
        imgUrl='https://links.papareact.com/gn7'
        title='Asheville Pizza and Brewing Co.'
        rating={5}
        genre='Pizza'
        address='675 Merrimon Ave. Asheville, NC 28804'
        shortDescription='Best Pizza in Asheville, NC'
        dishes={[]}
        long={20}
        lat={10}
         />
         <RestaurantCard
        id='123'
        imgUrl='https://links.papareact.com/gn7'
        title='Asheville Pizza and Brewing Co.'
        rating={5}
        genre='Pizza'
        address='675 Merrimon Ave. Asheville, NC 28804'
        shortDescription='Best Pizza in Asheville, NC'
        dishes={[]}
        long={20}
        lat={10}
         />
         <RestaurantCard
        id='123'
        imgUrl='https://links.papareact.com/gn7'
        title='Asheville Pizza and Brewing Co.'
        rating={5}
        genre='Pizza'
        address='675 Merrimon Ave. Asheville, NC 28804'
        shortDescription='Best Pizza in Asheville, NC'
        dishes={[]}
        long={20}
        lat={10}
         />


    </ScrollView>
     </View>
   )
 }
 
 export default FeaturedRow