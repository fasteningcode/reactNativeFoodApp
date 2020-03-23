import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchApi, results, errorMessage] = useResults();

   return (
      <View>
         <SearchBar term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         <Text>Search Screen : Found {results.length} results</Text>
         <Text>{results.data}</Text>
         <ResultsList />
         <ResultsList />
         <ResultsList />


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