import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import React, { useState, useEffect } from 'react';
import client from '../sanity';
import { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`
    *[_type == "category"]
    `).then((data) => {
      setCategories(data);
    });
  },[]);

  console.log("Category", categories);

  return (
    <ScrollView 
        contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,  
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CategoryCard
        key={category._id}
        id={category._id} 
        imgUrl={urlFor(category.image).width(200).url()}
        title={category.name} 
        />
      ))}
    </ScrollView>
  );
};

export default Categories