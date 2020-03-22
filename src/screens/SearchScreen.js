import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [results, setResults] = useState([]);
   const [errorMessage, setErrorMessage] = useState('')

   const searchApi = async (searchTerm) => {
      console.log('Hi there');

      try {
         const response = await yelp.get('/search', {
            params: {
               limit: 50,
               term: searchTerm,
               location: 'san jose'
            }
         });
         setResults(response.data.businesses);
      } catch (err) {
         setErrorMessage('Something went wrong')
         // console.log(err);
      }
   };

   // console.log(term);
   // console.log(results);
   // call searchAPI when component is first rendered
   // searchApi('pasta');

   return (
      <View>
         <SearchBar term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         <Text>Search Screen : Found {results.length} results</Text>
         <Text>{results.data}</Text>


      </View>
   )
}

const styles = StyleSheet.create({});

export default SearchScreen;

// SEARCH BAR USED TO BE 
//    <SearchBar term={term}
// onTermChange = {(newTerm) => setTerm(newTerm)}
// onTermSubmit = {() => {
//    searchApi();
//    console.log('term was submitted')
// }}
// /> 