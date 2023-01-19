import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard';
import React from 'react'

const Categories = () => {
  return (
    <ScrollView 
        contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        <CategoryCard img='https://links.papareact.com/wru' title='test' />
        <CategoryCard img='https://links.papareact.com/wru' title='test'/>
        <CategoryCard img='https://links.papareact.com/wru' title='test'/>
    </ScrollView>
  );
};

export default Categories