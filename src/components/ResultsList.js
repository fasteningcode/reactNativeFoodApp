import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         {/* <Text >Results : {results.length}</Text> */}

         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
               return <ResultsDetail result={item} />
            }}
         />
      </View>
   )
};

const styles = StyleSheet.create({
   title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 15,
      marginBottom: 5

   },
   container: {
      marginBottom: 10
   }
});

export default ResultsList;