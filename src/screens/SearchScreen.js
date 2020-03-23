import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = props => {
  console.log(props)

  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()
  // console.log(results)

  const filterResultsByPrice = price => {
    //price === $,$$,$$$
    return results.filter(result => {
      return result.price === price
    })
  }
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>Search Screen : Found {results.length} results</Text> */}
      <Text>{results.data}</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen

// SEARCH BAR USED TO BE
//    <SearchBar term={term}
// onTermChange = {(newTerm) => setTerm(newTerm)}
// onTermSubmit = {() => {
//    searchApi();
//    console.log('term was submitted')
// }}
// />
