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
        <CategoryCard img='https://links.papareact.com/gn7' title='Testing' />
        <CategoryCard img='https://links.papareact.com/gn7' title='Testing'/>
        <CategoryCard img='https://links.papareact.com/gn7' title='Testing'/>
        <CategoryCard img='https://links.papareact.com/gny' title='test'/>
        <CategoryCard img='https://links.papareact.com/gny' title='test'/>
        <CategoryCard img='https://links.papareact.com/gny' title='test'/>
        <CategoryCard img='https://links.papareact.com/gny' title='test'/>
        <CategoryCard img='https://links.papareact.com/gny' title='test'/>
    </ScrollView>
  );
};

export default Categories