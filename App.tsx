import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlateCards from './components/FlateCards'
import ElevatedCards from './components/ElevatedCards'


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlateCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App