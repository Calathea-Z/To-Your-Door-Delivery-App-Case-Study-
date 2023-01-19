import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image source={{uri: imgUrl,
        }} 
        className='h-20 w-20 rounded'
        />
        <Text className='bg-blue'> {title}</Text>
    </TouchableOpacity> 
  )  
}

export default CategoryCard