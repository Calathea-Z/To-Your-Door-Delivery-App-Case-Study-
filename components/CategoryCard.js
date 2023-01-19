import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = (props) => {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image source={{uri: props.img}} />
        console.log(props.img);
        <Text>{props.title}</Text>
    </TouchableOpacity> 
  );
};

export default CategoryCard