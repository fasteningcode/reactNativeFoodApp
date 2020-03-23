import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
   return (
      <View style={styles.container}>
         <Image source={{ uri: result.image_url }} style={styles.image} />
         <Text style={styles.name}> {result.name}</Text>
         <Text style={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginLeft: 15,

   },
   image: {
      width: 250,
      borderRadius: 4,
      height: 120,
      marginBottom: 5
   },
   name: {
      fontWeight: 'bold',
   },
   rating: {
      fontSize: 12
   }
});

export default ResultsDetail;